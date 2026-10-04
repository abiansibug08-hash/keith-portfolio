import Flagship from '@/components/Flagship'

/**
 * ShowcaseGrid - the /showcase view on one glass sheet.
 *
 * A page head with a badge card on the right, then the Flagship build: the
 * five-tab product mock, the copy, the CTA, and the testimonial marquee that
 * runs under it. Same head and glass as Projects and Services, so the shell
 * reads as one system. Styles live in src/styles/showcase.css (.ktools).
 */
export default function ShowcaseGrid() {
  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head">
        <div className="ktools__head-copy">
          <span className="pgrid__eyebrow">Showcase</span>
          <h1 className="pgrid__title" id="showcase-title">
            The full toolkit behind 8+ years of search results.
          </h1>
          <p className="pgrid__lede">
            Every tool, strategy, and system I use to help real estate and service brands rank on Google and get cited by AI.
          </p>
        </div>

        {/* Badge slot. Fixed 320x72 box so it sits on the baseline of the
            lede. Swap the image and text for a real badge, award or launch
            listing, and point the link at it. */}
        <div className="ktools__vote">
          <p className="ktools__vote-label">
            Certified by
            <span aria-hidden="true" className="ktools__vote-dot" />
            <span className="ktools__vote-ask">Google</span>
          </p>
          <a className="ktools__vote-frame ktools__vote-card" href="https://skillshop.withgoogle.com" target="_blank" rel="noopener noreferrer">
            <img src="/placeholders/badge.svg" alt="" width="48" height="48" />
            <span className="ktools__vote-text">
              Google Analytics Certified Professional
            </span>
          </a>
        </div>
      </header>

      <div className="home__glass ktools__glass">
        <Flagship eyebrow="Flagship build" />
      </div>
    </section>
  )
}
