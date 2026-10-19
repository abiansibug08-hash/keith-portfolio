import { useState } from 'react'
import { ArrowUpRight, X } from '@/components/slab'
import { projects } from '@/data/projects'

const portfolios: Record<string, { label: string; href: string }[]> = {
  'realiv': [
    { label: 'Visit REALIV website', href: 'https://byrealiv.com' },
    { label: 'Website management work', href: 'https://drive.google.com/drive/folders/1D_5JwqKADkd6Q3UjXj-WB4PZaoDq0vJ8' },
    { label: 'Real estate portfolio', href: 'https://drive.google.com/drive/folders/1T2O4UuxM63_e6qGFF2QqZHa8Zu7hiyPx' },
  ],
  'kacie-henke': [
    { label: 'Visit Kacie Henke website', href: 'https://kaciehenke.com' },
    { label: 'Real estate marketing samples', href: 'https://drive.google.com/drive/folders/1T2O4UuxM63_e6qGFF2QqZHa8Zu7hiyPx' },
  ],
  'nicholas-ryan': [
    { label: 'Real estate creative work', href: 'https://drive.google.com/drive/folders/1T2O4UuxM63_e6qGFF2QqZHa8Zu7hiyPx' },
  ],
  'dripiv': [
    { label: 'DRIPIV work samples', href: 'https://drive.google.com/drive/folders/14vCYWrvnBGJxgQsJ3Z5q_aCoHRqRmG6j' },
  ],
  'margot': [
    { label: 'Margot Spa work samples', href: 'https://drive.google.com/drive/folders/1yMDIFhqPprTsiscA9W4H9s028e4bxn5n' },
  ],
  'areaa-gla': [
    { label: 'AREAA GLA event and design work', href: 'https://drive.google.com/drive/folders/1b8IajyWGp-gJd-WBDQSft65Vczg18e-f' },
  ],
}
const categories = ['All', 'Real Estate', 'Wellness', 'Association'] as const
function category(id: string) {
  if (['realiv', 'kacie-henke', 'nicholas-ryan'].includes(id)) return 'Real Estate'
  if (['margot', 'dripiv'].includes(id)) return 'Wellness'
  return 'Association'
}

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const [selected, setSelected] = useState<string | null>(null)
  const current = projects.find(p => p.id === selected)
  const shown = projects.filter(p => filter === 'All' || category(p.id) === filter)
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Selected client work</span>
        <h1 className="pgrid__title" id="projects-title">Real clients. Real work.</h1>
        <p className="pgrid__lede">Marketing, SEO, websites, content and operations for six real estate, wellness and professional organizations. Explore verified work samples from my portfolio.</p>
      </header>
      <div className="home__glass pgrid__glass" style={{overflowY:'auto',padding:'clamp(16px,2.5vw,30px)'}}>
        <div role="group" aria-label="Filter clients" style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:20}}>
          {categories.map(c => <button key={c} type="button" onClick={() => setFilter(c)} aria-pressed={filter===c} style={{border:'1px solid currentColor',borderRadius:30,padding:'7px 14px',opacity:filter===c?1:.65,background:'transparent',color:'inherit',cursor:'pointer'}}>{c}</button>)}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,250px),1fr))',gap:14}}>
          {shown.map((p,i) => (
            <button key={p.id} type="button" className="bento__card bento__card--btn" onClick={() => setSelected(p.id)} aria-haspopup="dialog" style={{textAlign:'left',display:'flex',flexDirection:'column',gap:12,padding:22,minHeight:205,cursor:'pointer'}}>
              <span style={{fontSize:12,opacity:.65}}>{String(i+1).padStart(2,'0')} / {category(p.id)}</span>
              <strong style={{fontSize:'clamp(17px,1.5vw,22px)',lineHeight:1.3}}>{p.client}</strong>
              <span style={{fontSize:13,lineHeight:1.55,opacity:.85}}>{p.title}</span>
              <span style={{display:'flex',gap:6,flexWrap:'wrap'}}>{p.tags.slice(0,3).map(t=><span key={t} style={{border:'1px solid currentColor',borderRadius:12,padding:'3px 7px',fontSize:10,opacity:.8}}>{t}</span>)}</span>
              <span style={{marginTop:'auto',fontSize:12}}>View case study <ArrowUpRight size={14} aria-hidden="true"/></span>
            </button>
          ))}
        </div>
        <a href="https://drive.google.com/drive/folders/1Uqe5cmGDWJtiVu0J1Z2oJjigId3Hpmd9" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:6,marginTop:20,fontWeight:600}}>Explore the full creative portfolio <ArrowUpRight size={16}/></a>
      </div>
      {current && (
        <div className="pmodal" role="dialog" aria-modal="true" aria-label={current.client} onClick={e=>{if(e.target===e.currentTarget)setSelected(null)}}>
          <button type="button" className="pmodal__close" aria-label="Close case study" onClick={()=>setSelected(null)}><X size={18}/></button>
          <div className="pmodal__stage" style={{display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
            <article style={{background:'var(--cream)',color:'var(--navy)',borderRadius:22,padding:'clamp(24px,4vw,48px)',width:'min(100%,720px)',maxHeight:'85vh',overflowY:'auto'}}>
              <span style={{fontSize:12,opacity:.65}}>{category(current.id)} / Client work</span>
              <h2 style={{fontSize:'clamp(24px,3vw,40px)',lineHeight:1.15,margin:'14px 0'}}>{current.client}</h2>
              <h3 style={{fontSize:18,marginBottom:14}}>{current.title}</h3>
              <p style={{lineHeight:1.75,marginBottom:18}}>{current.description}</p>
              <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:24}}>{current.tags.map(t=><span key={t} style={{border:'1px solid currentColor',borderRadius:20,padding:'5px 10px',fontSize:12}}>{t}</span>)}</div>
              <h3 style={{fontSize:16,marginBottom:12}}>See the work</h3>
              <div style={{display:'grid',gap:10}}>{(portfolios[current.id]||[]).map(l=><a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" style={{display:'flex',justifyContent:'space-between',gap:10,padding:'12px 16px',border:'1px solid currentColor',borderRadius:12}}>{l.label}<ArrowUpRight size={18}/></a>)}</div>
              <p style={{fontSize:12,opacity:.65,marginTop:22}}>Projects shown are examples of work supported or produced in client marketing roles, not claims of business ownership.</p>
            </article>
          </div>
        </div>
      )}
    </section>
  )
}
