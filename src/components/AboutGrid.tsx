import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'

const CLAUDE = { src: '/icons/ai/claude-color.svg', name: 'Claude' }
const ZAPIER = { src: '/icons/ai/zapier.svg', name: 'Zapier' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Analytics' }
const SLACK = { src: '/icons/ai/canva.svg', name: 'Canva' }
const GITHUB = { src: '/icons/ai/wordpress.svg', name: 'WordPress' }
const CLOUDFLARE = { src: '/icons/ai/meta.svg', name: 'Meta Business' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'SEO & GEO / AEO',
    marks: [CLAUDE, GWS, ZAPIER],
  },
  {
    index: '02',
    title: 'Social Media Management',
    marks: [SLACK, CLOUDFLARE, GWS],
  },
  {
    index: '03',
    title: 'Website Management',
    marks: [ZAPIER, GITHUB, CLOUDFLARE],
  },
  {
    index: '04',
    title: 'AI-Powered Content & Automation',
    marks: [CLAUDE, ZAPIER, SLACK],
  },
  {
    index: '05',
    title: 'CRM & Marketing Operations',
    marks: [ZAPIER, CLAUDE, GWS],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          Hi, I&apos;m Keith.
        </h1>
        <p className="pgrid__lede">
          SEO and AI search specialist with 8+ years supporting US real estate teams across marketing, websites, CRM and operations.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I support digital visibility through SEO, website management, content, social media and marketing operations.
            <span> 8+ years working with US-based real estate teams.</span>
          </p>

          <p className="agrid__note">
            Most recently I was Operations Admin at{' '}
            <a className="agrid__link" href="https://www.kaciehenke.com" target="_blank" rel="noopener noreferrer">
              Kacie Henke Real Estate
            </a>
            {' '}— managing CRM, website SEO, email automations, and social content. Before that, from December 2021 to January 2025, I worked as Marketing Admin at{' '}
            <a className="agrid__link" href="https://byrealiv.com" target="_blank" rel="noopener noreferrer">
              KKRG / REALIV
            </a>
            {' '}supporting SEO, AI search, websites, email and social media. Previously, I supported the Nicholas Ryan Team from December 2018 to December 2021.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/avatar.png" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">8+ Years Experience</span>
                <span className="agrid__cell-meta">Digital Marketing &amp; SEO</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Philippines (Remote)</span>
                <span className="agrid__cell-meta">UTC+8 - Flexible for US hours</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="https://www.linkedin.com/in/abian-keith-sibug-27ba2419" target="_blank" rel="noopener noreferrer">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/icons/ai/linkedin.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">LinkedIn Profile</span>
                <span className="agrid__cell-meta">Connect with Keith</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src="/avatar.png"
            alt="Keith Sibug - SEO and AI Search Specialist"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
