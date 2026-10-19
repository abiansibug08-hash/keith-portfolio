import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: October 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This site is an informational professional portfolio. You may browse its content and contact me about possible work.</p>

          <h2>Work and payment</h2>
          <p>Any paid services, deliverables, timelines and fees are discussed and agreed separately in writing before work begins.</p>

          <h2>Ownership</h2>
          <p>Client names and examples are presented to illustrate work performed or supported. Trademarks and client-owned materials remain the property of their respective owners.</p>

          <h2>Liability</h2>
          <p>Information on this portfolio is provided for general reference and does not guarantee specific search rankings, traffic, or business outcomes.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
