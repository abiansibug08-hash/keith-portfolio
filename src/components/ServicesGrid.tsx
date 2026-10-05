import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Audit & Strategy',
    body: 'I review your current website, rankings, and AI search presence to find the exact gaps holding you back.',
    Icon: MagnetStraight,
    chips: ['Technical SEO', 'Keyword Research', 'Competitor Analysis', 'GEO Audit'],
  },
  {
    index: '02',
    label: 'Build & Optimize',
    body: 'I implement fixes, create AI-friendly content, and build the systems that get you found across every platform.',
    Icon: Timer,
    chips: ['On-Page SEO', 'Schema Markup', 'Content Writing', 'Social Media'],
  },
  {
    index: '03',
    label: 'Track & Grow',
    body: 'Monthly reporting, continuous improvements, and staying ahead of every algorithm update - Google and AI alike.',
    Icon: Trophy,
    chips: ['Monthly Reports', 'Search Console', 'GBP Management', 'AI Visibility'],
  },
]

const CLAUDE_ICON = '/icons/ai/claude-color.svg'
const ZAPIER = '/icons/ai/zapier.svg'
const GWS = '/icons/googleworkspace.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'SEO & AI Search Optimization',
    description: 'Get your website ranking on Google and cited by AI tools like ChatGPT and Perplexity.',
    chip: 'Core Service',
    logos: [CLAUDE_ICON, GWS, ZAPIER],
    bullets: [
      'Technical SEO audit and fixes',
      'GEO / AEO content strategy',
      'Monthly reporting and tracking',
    ],
  },
  {
    index: '02',
    title: 'Website Management',
    description: 'Ongoing management of your Wix, WordPress, or Squarespace website so you never worry about it.',
    chip: 'Ongoing',
    logos: [GWS, ZAPIER, CLAUDE_ICON],
    bullets: [
      'Content updates and landing pages',
      'SEO settings and speed optimization',
      'Plugin and security maintenance',
    ],
  },
  {
    index: '03',
    title: 'Social Media Management',
    description: 'Consistent, on-brand content across Instagram, Facebook, and YouTube that builds your audience.',
    chip: 'Monthly Retainer',
    logos: [CLAUDE_ICON, GWS, ZAPIER],
    bullets: [
      'Content calendar and scheduling',
      'Branded graphics and video reels',
      'Engagement and audience growth',
    ],
  },
  {
    index: '04',
    title: 'Email Marketing',
    description: 'Campaigns and automated sequences that keep your leads warm and your clients coming back.',
    chip: 'Campaign or Retainer',
    logos: [ZAPIER, GWS, CLAUDE_ICON],
    bullets: [
      'Mailchimp, Flodesk, or ActivePipe',
      'Drip sequences and nurture flows',
      'List management and segmentation',
    ],
  },
  {
    index: '05',
    title: 'Graphic Design & Video',
    description: 'Marketing materials, social graphics, brochures, postcards, and short-form video content.',
    chip: 'Project or Retainer',
    logos: [CLAUDE_ICON, ZAPIER, GWS],
    bullets: [
      'Canva and Photoshop design work',
      'Adobe Premiere and CapCut video editing',
      'AI-assisted content with Higgsfield',
    ],
  },
  {
    index: '06',
    title: 'CRM & Marketing Operations',
    description: 'CRM setup and management, lead pipeline organization, automated follow-up sequences, and SOP documentation for real estate teams.',
    chip: 'Monthly Retainer',
    logos: [GWS, ZAPIER, CLAUDE_ICON],
    bullets: [
      'Follow Up Boss CRM management',
      'Lead pipeline and automation setup',
      'SOPs, reporting, and admin support',
    ],
  },
]

function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Everything your brand needs to get found.
        </h1>
        <p className="pgrid__lede">
          SEO, AI search, social media, websites, email, and design - done for you.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I Work</span>
            <h2 className="sgrid__method-title" id="method-title">
              Audit. Build. Grow.
              <br />
              <span>A simple process with real results.</span>
            </h2>
            <p className="sgrid__method-sub">
              Every engagement starts with understanding where you are, then building the systems to get you where you want to be.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I offer.</h2>
            <p className="sgrid__offers-sub">Available as a monthly retainer or project basis.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 06</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Live automation</span>
              <h2 className="sgrid__flow-title">AI-powered marketing workflows.</h2>
              <p className="sgrid__flow-sub">
                I use Zapier and Claude to automate content creation, lead follow-up, and reporting - saving hours every week.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
