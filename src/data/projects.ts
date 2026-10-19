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
    id: "realiv",
    client: "Kevin Kwan — REALIV",
    title: "Real Estate Brand — SEO, Website & AI Search",
    description:
      "Full-service digital presence for a Scottsdale real estate team including social media management, marketing automations, website management and SEO.",
    tags: ["SEO", "GEO/AEO", "Wix", "Social Media", "Email", "Video", "Design"],
    url: "https://byrealiv.com",
  },
  {
    id: "margot",
    client: "Margot Spa",
    title: "Spa & Wellness — Social Media & Brand Design",
    description:
      "Branded social media content and promotional graphics for a luxury European spa, maintaining consistent visual identity across Instagram and Facebook.",
    tags: ["Social Media", "Graphic Design", "Brand", "Content"],
  },
  {
    id: "dripiv",
    client: "DRIPIV",
    title: "IV Therapy Clinic — Social Media & Content",
    description:
      "Social media content and branded marketing assets for an IV therapy clinic, growing audience and driving appointment inquiries.",
    tags: ["Social Media", "Graphic Design", "Content", "Video"],
  },
  {
    id: "kacie-henke",
    client: "Kacie Henke — Modern Life Real Estate",
    title: "Real Estate Brand — CRM, Operations & Marketing",
    description:
      "Operations Admin and digital marketing manager for a Phoenix-area real estate agent: CRM management in Follow Up Boss, website SEO, social media, email automations, and branded content.",
    tags: ["CRM", "SEO", "Social Media", "Email", "Design", "Follow Up Boss"],
    url: "https://www.kaciehenke.com",
  },
  {
    id: "nicholas-ryan",
    client: "Nick Rendleman — Nicholas Ryan Team Real Estate",
    title: "Real Estate Team — Social Media & Digital Marketing",
    description:
      "Marketing Admin (VA) for a real estate team: WordPress website management, social media content, video production, and Facebook/Google Ads.",
    tags: ["WordPress", "Social Media", "Video", "Facebook Ads", "Google Ads"],
  },,
  {
    id: "areaa-gla",
    client: "AREAA GLA",
    title: "Professional Association — Social Media, Brochures & Events",
    description: "Supported AREAA Greater Los Angeles with social media management, brochure creation and event marketing materials.",
    tags: ["Social Media", "Brochures", "Event Marketing", "Design"],
  }
];

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
