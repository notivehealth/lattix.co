export const site = {
  name: 'Lattix',
  url: 'https://lattix.co',
  email: 'hello@lattix.co',
  tagline: 'The national lattice for health data.',
  description:
    'Lattix is the interchange for labs, imaging, and the complete clinical record. FHIR-native APIs, nationwide exchange, built for TEFCA and state data-sharing frameworks.',
};

export const stats = [
  { value: '220M+', label: 'Patients' },
  { value: '147K+', label: 'Care sites' },
  { value: '90%', label: 'Connected ambulatory labs' },
  { value: '92%', label: 'U.S. coverage' },
];

export const products = [
  {
    slug: 'platform',
    href: '/platform',
    name: 'Platform',
    title: 'Health Interoperability Platform',
    blurb: 'MPI, record locator, normalization, and a national repository — the operated pipeline under every Lattix product.',
    startsWith: 'Master Patient Index + FHIR APIs',
  },
  {
    slug: 'clinical-record',
    href: '/products/clinical-record',
    name: 'Clinical Record',
    title: 'Longitudinal clinical data',
    blurb: 'A complete, de-duplicated chart from EHRs nationwide — medications, problems, labs, imaging, notes, and more.',
    startsWith: 'Patient record + viewer, embedded',
  },
  {
    slug: 'diagnostics',
    href: '/products/diagnostics',
    name: 'Diagnostics',
    title: 'Labs and imaging interchange',
    blurb: 'One interface to order labs and imaging and receive structured results from 120+ diagnostic vendors.',
    startsWith: 'Electronic orders + structured results',
  },
  {
    slug: 'alerts',
    href: '/products/alerts',
    name: 'Clinical Alerts',
    title: 'ADT and network activity',
    blurb: 'Know the moment a patient is admitted, discharged, transferred, or active anywhere on the network.',
    startsWith: 'ADT + document-driven alerts',
  },
  {
    slug: 'patient-access',
    href: '/products/patient-access',
    name: 'Patient Access',
    title: 'Individual Access Services',
    blurb: 'Let patients retrieve and share their records under IAS, with IAL2 identity proofing and FHIR APIs.',
    startsWith: 'Patient-authorized retrieval',
  },
  {
    slug: 'chart-retrieval',
    href: '/products/chart-retrieval',
    name: 'Chart Retrieval',
    title: 'Organized records for insurers',
    blurb: 'Electronic chart retrieval for underwriting, claims, and disability — a searchable, consolidated medical history.',
    startsWith: 'Authorized chart + same-day start',
  },
  {
    slug: 'network',
    href: '/products/network',
    name: 'Network',
    title: 'Nationwide health information network',
    blurb: 'Participate in TEFCA and state data exchange through a single connection to the Lattix lattice.',
    startsWith: 'TEFCA + state DxF connectivity',
  },
];

export const markets = [
  {
    slug: 'ehr',
    href: '/markets/ehr',
    name: 'EHRs',
    blurb: 'Make your product more valuable to the providers you sell to, without building interoperability in-house.',
    startsWith: 'Patient record + viewer, embedded',
  },
  {
    slug: 'payers',
    href: '/markets/payers',
    name: 'Payers & payviders',
    blurb: 'A more complete member record for care management, quality, risk, and timely awareness when something happens.',
    startsWith: 'Complete member record + alerts',
  },
  {
    slug: 'digital-health',
    href: '/markets/digital-health',
    name: 'Digital health',
    blurb: 'Ship on clean, ready-to-use data without becoming an interoperability company yourself.',
    startsWith: 'Patient record via API + lab ordering',
  },
  {
    slug: 'labs',
    href: '/markets/labs',
    name: 'Labs & imaging',
    blurb: 'Publish results into the network and accept orders from thousands of providers through one interface.',
    startsWith: 'Order intake + respond-to-network',
  },
  {
    slug: 'value-based-care',
    href: '/markets/value-based-care',
    name: 'Value-based care',
    blurb: 'A full cross-setting record for the populations you are accountable for, and early warning of costly events.',
    startsWith: 'Clinical Alerts + complete record',
  },
];

export const pipeline = [
  {
    n: '01',
    title: 'Find',
    body: 'Locate every record, across networks that do not share one rulebook.',
  },
  {
    n: '02',
    title: 'Match',
    body: 'Know it is the same person when names and birthdates never quite line up.',
  },
  {
    n: '03',
    title: 'Fill the gaps',
    body: 'Automatically go find records at clinics you did not know to ask.',
  },
  {
    n: '04',
    title: 'Translate',
    body: 'Turn many formats and code systems into one clean FHIR record.',
  },
  {
    n: '05',
    title: 'De-duplicate',
    body: 'Collapse the same fact arriving three ways into one.',
  },
  {
    n: '06',
    title: 'Reconcile',
    body: 'Decide what is true when results conflict, and keep the provenance.',
  },
  {
    n: '07',
    title: 'Deliver',
    body: 'Every fact traceable to its source, every access logged, on time.',
  },
];

export const certifications = [
  {
    name: 'HITRUST R2',
    body: 'We manage cybersecurity risk against the HITRUST CSF, exceeding industry-defined information security requirements.',
  },
  {
    name: 'SOC 2 Type II',
    body: 'Independent attestation of controls relevant to security, availability, processing integrity, confidentiality, and privacy.',
  },
  {
    name: 'HIPAA',
    body: 'Compliance with applicable health data law is built into our culture, processes, contracts, and staff training.',
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
