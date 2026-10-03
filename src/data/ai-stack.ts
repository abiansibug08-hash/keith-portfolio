import type { Icon } from '@phosphor-icons/react'
import {
  MagnifyingGlass,
  Robot,
  Globe,
  EnvelopeSimple,
  PaintBrush,
  ChartLineUp,
  Cpu,
  Play,
  Envelope,
  Wrench,
  Video,
  Star,
} from '@phosphor-icons/react'

export interface StackNode {
  id: string;
  label: string;
  name: string;
  what: string;
  Icon: Icon;
  status?: string;
  stack?: string;
  logos?: { src: string; name: string }[];
  children?: StackNode[];
}

export const aiStack: StackNode = {
  id: "root",
  label: "Keith's Toolkit",
  name: "Keith's Toolkit",
  what: "8+ years of digital marketing tools and systems for real estate and service brands.",
  Icon: Star,
  children: [
    {
      id: "seo",
      label: "SEO & AI Search",
      name: "SEO & AI Search",
      what: "Ranking on Google and getting cited by AI tools like ChatGPT and Perplexity.",
      Icon: MagnifyingGlass,
      status: "Active",
      children: [
        { id: "gsc", label: "Google Search Console", name: "Google Search Console", what: "Index monitoring, click-through analysis, sitemap management.", Icon: ChartLineUp },
        { id: "ga4", label: "Google Analytics", name: "Google Analytics", what: "Traffic analysis, goal setup, monthly reporting.", Icon: ChartLineUp },
        { id: "yoast", label: "Yoast SEO", name: "Yoast SEO", what: "On-page SEO settings, schema markup, and XML sitemaps.", Icon: Globe },
        { id: "geo", label: "GEO / AEO Strategy", name: "GEO / AEO Strategy", what: "Optimizing content to appear in ChatGPT, Perplexity, and AI Overviews.", Icon: Robot },
      ],
    },
    {
      id: "social",
      label: "Social Media",
      name: "Social Media",
      what: "Building audiences and engagement across Instagram, Facebook, and YouTube.",
      Icon: Play,
      status: "Active",
      children: [
        { id: "meta", label: "Meta Business Suite", name: "Meta Business Suite", what: "Publishing, scheduling, and performance insights for Facebook and Instagram.", Icon: Globe },
        { id: "vidiq", label: "VidIQ", name: "VidIQ", what: "YouTube channel growth, keyword research, and video SEO optimization.", Icon: Video },
        { id: "higgsfield", label: "Higgsfield AI", name: "Higgsfield AI", what: "AI-assisted short-form video content creation for Reels and Shorts.", Icon: Robot },
      ],
    },
    {
      id: "websites",
      label: "Website Management",
      name: "Website Management",
      what: "Building and maintaining websites that rank and convert.",
      Icon: Globe,
      status: "Active",
      children: [
        { id: "wix", label: "Wix", name: "Wix", what: "Page builds, SEO settings, landing pages, and listing management.", Icon: Globe },
        { id: "wp", label: "WordPress", name: "WordPress", what: "Content updates, Yoast, plugin management, and speed optimization.", Icon: Globe },
        { id: "squarespace", label: "Squarespace", name: "Squarespace", what: "Site maintenance and content updates.", Icon: Globe },
        { id: "lp", label: "Luxury Presence", name: "Luxury Presence", what: "Real estate website management and listing pages.", Icon: Globe },
      ],
    },
    {
      id: "email",
      label: "Email & Automation",
      name: "Email & Automation",
      what: "Campaigns and automated sequences that keep leads warm.",
      Icon: Envelope,
      status: "Active",
      children: [
        { id: "mailchimp", label: "Mailchimp", name: "Mailchimp", what: "Campaign design, list segmentation, and automated sequences.", Icon: EnvelopeSimple },
        { id: "flodesk", label: "Flodesk", name: "Flodesk", what: "Visual email design and subscriber workflows.", Icon: EnvelopeSimple },
        { id: "activepipe", label: "ActivePipe", name: "ActivePipe", what: "Real estate email automation and drip campaigns.", Icon: EnvelopeSimple },
        { id: "zapier", label: "Zapier", name: "Zapier", what: "Workflow automations connecting CRMs, forms, and marketing tools.", Icon: Cpu },
      ],
    },
    {
      id: "design",
      label: "Design & Creative",
      name: "Design & Creative",
      what: "Marketing materials and video content that represent the brand.",
      Icon: PaintBrush,
      status: "Active",
      children: [
        { id: "canva", label: "Canva", name: "Canva", what: "Social graphics, brochures, postcards, and branded materials.", Icon: PaintBrush },
        { id: "photoshop", label: "Adobe Photoshop", name: "Adobe Photoshop", what: "Photo editing, retouching, and marketing asset creation.", Icon: PaintBrush },
        { id: "premiere", label: "Adobe Premiere", name: "Adobe Premiere", what: "Video editing for social, YouTube, and property tours.", Icon: Video },
        { id: "claude", label: "Claude & ChatGPT", name: "Claude & ChatGPT", what: "AI-assisted content writing, SEO copy, and workflow automation.", Icon: Wrench },
      ],
    },
  ],
};
