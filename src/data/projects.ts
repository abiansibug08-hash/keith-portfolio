export interface Project {
  id: string;
  client: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
}

export interface AppProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  accentColor: string;
  imageSrc?: string;
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'realiv',
    client: 'Kevin Kwan — REALIV',
    title: 'SEO, AI Search, Website & Marketing Operations',
    description: 'Marketing Admin, SEO, Website & AI Search (December 2021–January 2025). Supported website and landing page management, keyword research, technical and on-page SEO, GEO/AEO strategy, social media, email campaigns, video editing and marketing automation.',
    tags: ['SEO', 'GEO/AEO', 'Websites', 'Social Media', 'Email', 'Automation'],
    url: 'https://byrealiv.com',
  },
  {
    id: 'kacie-henke',
    client: 'Kacie Henke — Modern Life Real Estate',
    title: 'Marketing Operations, CRM, SEO & Social Media',
    description: 'Operations Admin (February 2025–June 2026). Managed Follow Up Boss CRM workflows, website SEO and updates, social media, email marketing, listing collateral, property video content, YouTube SEO, SOPs and automations.',
    tags: ['Follow Up Boss', 'SEO', 'Social Media', 'Email', 'Automation'],
    url: 'https://kaciehenke.com',
  },
  {
    id: 'nicholas-ryan',
    client: 'Nick Rendleman — Nicholas Ryan Team Real Estate',
    title: 'Social Media & Website Management',
    description: 'Marketing Admin (Virtual Assistant), December 2018–December 2021. Managed WordPress website and landing page updates, social content and scheduling, marketing graphics, listing videos and digital advertising support.',
    tags: ['WordPress', 'Social Media', 'Graphic Design', 'Video'],
  },
  {
    id: 'dripiv',
    client: 'DRIPIV',
    title: 'Social Media Management',
    description: 'Created and managed social media content for DRIPIV, with creative work samples available in the linked portfolio folder.',
    tags: ['Social Media', 'Content'],
  },
  {
    id: 'margot',
    client: 'Margot Spa',
    title: 'Social Media Management',
    description: 'Created social media content for Margot Spa, including reel and magazine-cover work represented in the linked portfolio.',
    tags: ['Social Media', 'Content', 'Design'],
  },
  {
    id: 'areaa-gla',
    client: 'AREAA GLA',
    title: 'Social Media, Brochures & Event Marketing',
    description: 'Supported social media and event marketing collateral for AREAA Greater Los Angeles, including golf tournament, gala and summit graphics.',
    tags: ['Social Media', 'Brochures', 'Event Marketing'],
  },
]

export const mobileApps: AppProject[] = [
  {
    id: "realiv-website",
    name: "REALIV Website",
    tagline: "Built for search. Designed to convert.",
    description:
      "Rebuilt and managed the KKRG/REALIV Wix website with full SEO implementation, landing pages, and GEO/AEO content strategy to rank in Google and AI search engines.",
    badge: "Live",
    accentColor: "#22C55E",

    stats: [
      { label: "Years Managed", value: "4.5" },
      { label: "Platform", value: "Wix" },
      { label: "Strategy", value: "SEO + GEO" },
    ],
  },
  {
    id: "margot-social",
    name: "Margot European Spa",
    tagline: "Brand consistency across every post.",
    description:
      "Created and managed branded social media content and promotional design assets for a luxury European spa brand.",
    badge: "Social",
    accentColor: "#8B5CF6",

    stats: [
      { label: "Platforms", value: "2" },
      { label: "Type", value: "Social + Design" },
      { label: "Focus", value: "Brand" },
    ],
  },
  {
    id: "dripiv-content",
    name: "DripIV Therapy",
    tagline: "Content that drives appointments.",
    description:
      "Produced social media content and branded marketing materials for an IV therapy wellness clinic.",
    badge: "Content",
    accentColor: "#0EA5E9",

    stats: [
      { label: "Platforms", value: "2" },
      { label: "Type", value: "Social + Video" },
      { label: "Focus", value: "Growth" },
    ],
  },
  {
    id: "kacie-henke-website",
    name: "Kacie Henke Real Estate",
    tagline: "CRM, SEO, and operations — all in one role.",
    description:
      "Operations Admin for a Phoenix-area real estate agent: managed Follow Up Boss CRM, Wix website SEO, social media, email campaigns, property listings, and branded content.",
    badge: "Live",
    accentColor: "#F59E0B",

    stats: [
      { label: "Duration", value: "1.5 yrs" },
      { label: "CRM", value: "Follow Up Boss" },
      { label: "Platform", value: "Wix" },
    ],
  },
];
