// Citation-style reference codes echo the firm's own drafting conventions —
// used as the small marginal annotation next to each practice area.
export const practiceAreas = [
  {
    slug: "corporate-commercial",
    ref: "OMP/CORP",
    name: "Corporate & Commercial Law",
    summary:
      "Formation, governance, and transactions for businesses at every stage, from first incorporation to cross-border joint ventures.",
    services: [
      "Company Formation",
      "Corporate Governance",
      "Mergers & Acquisitions",
      "Joint Ventures",
      "Shareholder Agreements",
      "Business Structuring",
      "Corporate Secretarial Services",
    ],
  },
  {
    slug: "real-estate",
    ref: "OMP/REAL",
    name: "Real Estate Law",
    summary:
      "Due diligence and documentation for property acquisition, leasing, and disputes across Nigeria's commercial and residential markets.",
    services: [
      "Property Acquisition",
      "Due Diligence",
      "Land Documentation",
      "Property Disputes",
      "Leases",
      "Commercial Property",
    ],
  },
  {
    slug: "litigation",
    ref: "OMP/LIT",
    name: "Litigation & Dispute Resolution",
    summary:
      "Representation before courts, tribunals, and arbitral panels, with a preference for resolution that protects the relationship, not just the record.",
    services: [
      "Civil Litigation",
      "Commercial Litigation",
      "Arbitration",
      "Mediation",
      "Debt Recovery",
      "Enforcement of Judgments",
    ],
  },
  {
    slug: "employment",
    ref: "OMP/EMP",
    name: "Employment Law",
    summary:
      "Contracts, policy, and advisory that keep growing teams compliant and workplace disputes rare.",
    services: [
      "Employment Contracts",
      "HR Advisory",
      "Workplace Disputes",
      "Employee Handbooks",
      "Wrongful Termination",
    ],
  },
  {
    slug: "intellectual-property",
    ref: "OMP/IP",
    name: "Intellectual Property",
    summary:
      "Registration and enforcement strategy for the brands, inventions, and creative work behind a growing business.",
    services: ["Trademark Registration", "Copyright", "Patents", "IP Strategy", "Licensing"],
  },
  {
    slug: "family",
    ref: "OMP/FAM",
    name: "Family Law",
    summary:
      "Discreet counsel through divorce, custody, adoption, and estate matters, handled with the sensitivity these matters deserve.",
    services: ["Divorce", "Child Custody", "Adoption", "Guardianship", "Estate Matters"],
  },
  {
    slug: "criminal-defence",
    ref: "OMP/CRIM",
    name: "Criminal Defence",
    summary:
      "Defence for individuals and corporates facing fraud allegations, white-collar investigations, and criminal proceedings.",
    services: [
      "White Collar Crimes",
      "Fraud Defence",
      "Bail Applications",
      "Criminal Representation",
    ],
  },
  {
    slug: "banking-finance",
    ref: "OMP/BANK",
    name: "Banking & Finance",
    summary:
      "Documentation and regulatory guidance for lenders, borrowers, and financial institutions operating under Nigerian law.",
    services: ["Loan Documentation", "Financial Regulations", "Securities", "Compliance"],
  },
  {
    slug: "tax",
    ref: "OMP/TAX",
    name: "Tax Law",
    summary: "Planning and dispute support that keeps tax exposure predictable.",
    services: ["Tax Advisory", "Tax Planning", "Tax Disputes"],
  },
  {
    slug: "immigration",
    ref: "OMP/IMM",
    name: "Immigration Law",
    summary: "Business immigration and residency advisory for foreign investors and their teams.",
    services: ["Business Immigration", "Work Permits", "Residency", "Citizenship Advisory"],
  },
  {
    slug: "technology",
    ref: "OMP/TECH",
    name: "Technology Law",
    summary:
      "Contracts and compliance for software, data, and AI-driven businesses building on Nigerian and international frameworks.",
    services: [
      "SaaS Agreements",
      "Privacy Policies",
      "Data Protection",
      "Software Licensing",
      "AI Compliance",
      "Cybersecurity Compliance",
    ],
  },
  {
    slug: "oil-gas",
    ref: "OMP/O&G",
    name: "Oil & Gas",
    summary: "Regulatory and contractual advisory across the upstream, midstream, and downstream sectors.",
    services: ["Regulatory Compliance", "Licensing", "Contracts", "Environmental Issues"],
  },
  {
    slug: "maritime",
    ref: "OMP/MAR",
    name: "Maritime Law",
    summary: "Shipping contracts and admiralty matters for operators moving goods through Nigerian waters.",
    services: ["Shipping Contracts", "Admiralty Matters"],
  },
  {
    slug: "aviation",
    ref: "OMP/AVI",
    name: "Aviation Law",
    summary: "Regulatory advisory and contract support for airlines and aviation service providers.",
    services: ["Regulatory Advisory", "Aviation Contracts"],
  },
  {
    slug: "environmental",
    ref: "OMP/ENV",
    name: "Environmental Law",
    summary: "ESG compliance and environmental permitting for industrial and infrastructure projects.",
    services: ["ESG Compliance", "Environmental Permits"],
  },
  {
    slug: "construction",
    ref: "OMP/CONS",
    name: "Construction Law",
    summary: "EPC contract drafting and dispute resolution for developers and contractors.",
    services: ["EPC Contracts", "Construction Disputes"],
  },
  {
    slug: "competition",
    ref: "OMP/COMP",
    name: "Competition Law",
    summary: "Antitrust and consumer protection counsel for businesses operating in concentrated markets.",
    services: ["Antitrust", "Consumer Protection"],
  },
  {
    slug: "insolvency",
    ref: "OMP/INSV",
    name: "Insolvency & Restructuring",
    summary: "Recovery strategy and receivership guidance for businesses navigating financial distress.",
    services: ["Receivership", "Business Recovery"],
  },
  {
    slug: "estate-planning",
    ref: "OMP/EST",
    name: "Estate Planning",
    summary: "Wills, probate, and trust structures that carry a family's intentions forward cleanly.",
    services: ["Wills", "Probate", "Trusts"],
  },
  {
    slug: "sports-entertainment",
    ref: "OMP/SPE",
    name: "Sports & Entertainment Law",
    summary: "Talent contracts, licensing, and sponsorship agreements for athletes, creators, and brands.",
    services: ["Talent Contracts", "Licensing", "Sponsorship Agreements"],
  },
  {
    slug: "ngo-nonprofit",
    ref: "OMP/NGO",
    name: "NGO & Nonprofit Advisory",
    summary: "Registration and governance counsel for nonprofits and development organisations.",
    services: ["Registration", "Compliance", "Governance"],
  },
];

// Home page surfaces a curated subset — the six matters clients ask about most.
export const featuredPracticeAreaSlugs = [
  "corporate-commercial",
  "real-estate",
  "litigation",
  "banking-finance",
  "technology",
  "oil-gas",
];
