export const site = {
  name: 'Lattix',
  url: 'https://lattix.co',
  email: 'dillon@lattix.co',
  tagline: 'The lattice for health data interchange.',
  description:
    'Lattix is the interchange for labs, imaging, and the clinical record. One interface for electronic orders, structured results, and FHIR-native exchange — instead of a new project for every partner.',
};

export const stats = [
  { value: 'HL7 + FHIR', label: 'Orders and results' },
  { value: 'One', label: 'Interface for the lattice' },
  { value: 'Weeks', label: 'Typical time to first order' },
  { value: 'HIPAA', label: 'Covered by a BAA' },
];

export const products = [
  {
    slug: 'platform',
    href: '/platform',
    name: 'Platform',
    title: 'Health interchange platform',
    blurb: 'Identity, translation, routing, and delivery — the operated pipeline under every Lattix connection.',
    startsWith: 'HL7 v2 + FHIR APIs',
  },
  {
    slug: 'diagnostics',
    href: '/products/diagnostics',
    name: 'Diagnostics',
    title: 'Labs and imaging interchange',
    blurb: 'Electronic orders and structured results for laboratories and imaging centers — one interface, not a stack of projects.',
    startsWith: 'Orders + structured results',
  },
  {
    slug: 'clinical-record',
    href: '/products/clinical-record',
    name: 'Clinical Record',
    title: 'The chart, as data',
    blurb: 'A de-duplicated FHIR chart from the organizations on the lattice — medications, problems, labs, imaging, notes, and more — delivered into your systems.',
    startsWith: 'Normalized FHIR payload',
  },
  {
    slug: 'network',
    href: '/products/network',
    name: 'Network',
    title: 'A lattice that compounds',
    blurb: 'Connect once. Every lab, imaging group, and EHR that joins the lattice is available to everyone already on it.',
    startsWith: 'One connection, growing coverage',
  },
];

export const markets = [
  {
    slug: 'labs',
    href: '/markets/labs',
    name: 'Labs & imaging',
    blurb: 'Accept electronic orders from EHRs on the lattice without standing up a new interface for every clinic that wants to send you work.',
    startsWith: 'Order intake + result return',
  },
  {
    slug: 'ehr',
    href: '/markets/ehr',
    name: 'EHRs',
    blurb: 'Cash-pay and direct-care practices still need labs and imaging. Ship ordering and results without a five-figure interface project to start.',
    startsWith: 'Diagnostics API + chart payload',
  },
  {
    slug: 'digital-health',
    href: '/markets/digital-health',
    name: 'Digital health',
    blurb: 'Place diagnostic orders and receive structured results inside the product you already sell.',
    startsWith: 'Orders and results via API',
  },
];

export const pipeline = [
  {
    n: '01',
    title: 'Connect',
    body: 'One technical integration — FHIR, HL7 v2, SFTP, or the transport the partner already runs.',
  },
  {
    n: '02',
    title: 'Identify',
    body: 'Match the patient across systems when names, MRNs, and birthdates never quite agree.',
  },
  {
    n: '03',
    title: 'Translate',
    body: 'Turn vendor catalogs, codes, and message flavors into one clean FHIR record.',
  },
  {
    n: '04',
    title: 'Route',
    body: 'Send the order to the right lab or imaging center, with the compendium and billing the partner expects.',
  },
  {
    n: '05',
    title: 'Return',
    body: 'Structured results back the other way — not a PDF in a fax queue.',
  },
  {
    n: '06',
    title: 'File',
    body: 'Deliver the payload into the EHR or product already in use, with provenance intact.',
  },
  {
    n: '07',
    title: 'Audit',
    body: 'Every access logged. Every fact traceable to its source. Ready for a BAA.',
  },
];

export const certifications = [
  {
    name: 'HIPAA',
    body: 'Protected health information is processed under a Business Associate Agreement. Minimum necessary access, workforce training, and retention aligned to the BAA.',
  },
  {
    name: 'Encryption & tenancy',
    body: 'In transit and at rest. Logical separation between organizations. No patient data on laptops as a matter of policy.',
  },
  {
    name: 'Audit',
    body: 'Every order, result, and record access is logged. Partners can see what moved, when, and under which purpose of use.',
  },
];

export const dataTypes = [
  'Vitals',
  'Diagnoses',
  'Procedures',
  'Medications',
  'Allergies',
  'Immunizations',
  'Labs',
  'Imaging',
  'Progress notes',
  'Encounters',
  'Family history',
  'Social history',
];

export const nav = {
  product: products,
  markets,
  links: [
    { href: '/developers', name: 'Developers' },
    { href: '/security', name: 'Security' },
    { href: '/about', name: 'About' },
  ],
};
