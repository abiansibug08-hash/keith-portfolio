import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'

const CLAUDE = { src: '/icons/ai/claude-color.svg', name: 'Claude' }
const ZAPIER = { src: '/icons/ai/zapier.svg', name: 'Zapier' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Analytics' }
const SLACK = { src: '/icons/ai/slack-color.svg', name: 'Canva' }
const GITHUB = { src: '/icons/ai/github.svg', name: 'VidIQ' }
const CLOUDFLARE = { src: '/icons/ai/cloudflare.svg', name: 'Meta Business' }

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
          SEO specialist helping real estate brands rank on Google and get cited by AI.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I help businesses show up where their clients are searching - on Google, on ChatGPT, on Perplexity.
            <span> 8 years of making that happen for real estate teams.</span>
          </p>

          <p className="agrid__note">
            Most of my career has been with{' '}
            <a className="agrid__link" href="https://byrealiv.com" target="_blank" rel="noopener noreferrer">
              KKRG / REALIV
            </a>
            {' '}- a Scottsdale-based real estate team where I built and ran their entire digital presence: SEO, website, GEO/AEO, social media, email marketing, and design.
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
                <img src="/placeholders/badge.svg" alt="" loading="lazy" decoding="async" />
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

            <a className="agrid__cell agrid__cell--wide" href="https://linkedin.com/in/abian-keith-sibug-27ba2419a" target="_blank" rel="noopener noreferrer">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/placeholders/logo.svg" alt="" loading="lazy" decoding="async" />
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
