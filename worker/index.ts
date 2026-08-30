const APEX = 'lattix.co';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = {
  firstName: 80,
  lastName: 80,
  email: 254,
  org: 160,
  role: 80,
  message: 8000,
};

type Env = {
  ASSETS: { fetch: typeof fetch };
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === `www.${APEX}` || url.hostname.startsWith('www.')) {
      url.hostname = APEX;
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/api/contact') {
      if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders(request) });
      }
      if (request.method !== 'POST') {
        return json({ error: 'Method not allowed' }, 405);
      }
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (!env.RESEND_API_KEY) {
    return json({ error: 'Mail is not configured yet. Try again in a moment.' }, 503);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: 'Send the form as JSON.' }, 400);
  }

  // Honeypot — bots fill hidden fields.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return json({ ok: true }, 200);
  }

  const firstName = clean(body.firstName, MAX.firstName);
  const lastName = clean(body.lastName, MAX.lastName);
  const email = clean(body.email, MAX.email).toLowerCase();
  const org = clean(body.org, MAX.org);
  const role = clean(body.role, MAX.role);
  const message = clean(body.message, MAX.message);

  if (!firstName || !lastName || !email || !org || !message) {
    return json({ error: 'Please fill in every field.' }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return json({ error: 'That email address does not look valid.' }, 400);
  }

  const text = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Organization: ${org}`,
    `Role: ${role || '—'}`,
    '',
    message,
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `Lattix inquiry — ${org}`,
      text,
    }),
  });

  if (!res.ok) {
    const detail = (await res.text()).slice(0, 500);
    console.error('resend_failed', res.status, detail);
    return json({ error: 'Could not send just now. Try again in a moment.' }, 502);
  }

  return json({ ok: true }, 200);
}

function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, max);
}

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

function corsHeaders(request: Request): HeadersInit {
  const origin = request.headers.get('Origin') ?? '';
  const allow = origin.endsWith('lattix.co') ? origin : `https://${APEX}`;
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type',
  };
}
