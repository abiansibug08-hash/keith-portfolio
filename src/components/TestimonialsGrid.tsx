import { Gauge, Robot, Code } from '@/components/slab'
import type { Icon } from '@/components/slab'

type Client = {
  index: string
  name: string
  role: string
  daily: string
  work: string[]
  logoSrc?: string
  Icon: Icon
}

const CLIENTS: Client[] = [
  {
    index: '01',
    name: 'KKRG / REALIV',
    role: 'Marketing Admin - SEO, Website & AI Search',
    daily:
      'Managed the full digital presence for a Scottsdale real estate team over 4.5 years - SEO, website, GEO/AEO, social media, email marketing, video, and design.',
    work: ['SEO', 'GEO/AEO', 'Wix', 'Social Media', 'Email', 'Video'],
    Icon: Gauge,
  },
  {
    index: '02',
    name: 'Margot European Spa',
    role: 'Social Media & Brand Design',
    daily:
      'Created branded social media content and promotional graphics for a luxury European spa, maintaining consistent visual identity across Instagram and Facebook.',
    work: ['Social Media', 'Graphic Design', 'Canva', 'Content'],
    Icon: Robot,
  },
  {
    index: '03',
    name: 'DripIV Therapy',
    role: 'Social Media & Content',
    daily:
      'Produced social media content and branded marketing assets for an IV therapy clinic, growing audience and driving appointment inquiries.',
    work: ['Social Media', 'Graphic Design', 'Content', 'Video'],
    Icon: Code,
  },
  {
    index: '04',
    name: 'Kacie Henke Real Estate',
    role: 'Operations Admin — Feb 2025 to Jun 2026',
    daily:
      'Managed CRM (Follow Up Boss), Wix website SEO, social media content, email automations, property listings, branded graphics, and SOPs for a Phoenix-area real estate agent.',
    work: ['Follow Up Boss', 'Wix SEO', 'Social Media', 'Email', 'Design', 'CRM'],
    Icon: Gauge,
  },
  {
    index: '05',
    name: 'Nicholas Ryan Team',
    role: 'Marketing Admin (VA) — Dec 2018 to Dec 2021',
    daily:
      'WordPress website management, social media content, video production, and Facebook and Google Ads management for a real estate team.',
    work: ['WordPress', 'Social Media', 'Video', 'Facebook Ads', 'Google Ads'],
    Icon: Robot,
  },
]

export default function TestimonialsGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="testimonials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Clients</span>
        <h1 className="pgrid__title" id="testimonials-title">
          Brands I have grown.
        </h1>
        <p className="pgrid__lede">
          Real estate teams, wellness brands, and service businesses - built their SEO, social, and digital presence from the ground up.
        </p>
      </header>

      <div className="home__glass tgrid__glass">
        <div className="tgrid__ledger">
          <div className="tgrid__ledger-head">
            <h2 className="tgrid__ledger-title">Clients I have worked with.</h2>
            <p className="tgrid__ledger-sub">Long-term partnerships across real estate and wellness.</p>
          </div>

          <ul className="tgrid__clients" role="list">
            {CLIENTS.map((c) => {
              const FallbackIcon = c.Icon
              return (
                <li key={c.index} className="tgrid__client">
                  <span className="tgrid__client-ghost" aria-hidden="true">{c.index}</span>
                  <span className="tgrid__client-mark" aria-hidden="true">
                    {c.logoSrc ? (
                      <img src={c.logoSrc} alt="" loading="lazy" decoding="async" />
                    ) : (
                      <FallbackIcon size={22} weight="duotone" />
                    )}
                  </span>

                  <span className="tgrid__client-body">
                    <span className="tgrid__client-head">
                      <span className="tgrid__client-name">{c.name}</span>
                      <span className="tgrid__client-role">{c.role}</span>
                    </span>
                    <span className="tgrid__client-daily">{c.daily}</span>
                    <ul className="tgrid__client-tags" role="list">
                      {c.work.map((w, i) => (
                        <li key={`${w}-${i}`} className="tgrid__client-tag">
                          {w}
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
