import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: October 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This personal portfolio is operated by Abian Keith Sibug. It showcases professional experience and examples of marketing work.</p>

          <h2>What is collected</h2>
          <p>If you contact me, you may provide your name, email address and message. The website may also use standard hosting and technical logs.</p>

          <h2>How it is used</h2>
          <p>Contact details are used to respond to inquiries and discuss potential work. Website hosting and any configured form provider may process submissions to deliver them.</p>

          <h2>How long it is kept</h2>
          <p>You may request deletion of your correspondence by emailing me. Retention of any data held by third-party platforms is subject to their own policies.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
