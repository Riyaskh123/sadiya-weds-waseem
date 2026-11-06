import { useEffect, useRef, useState } from 'react'
import { INFO } from './data/invitation'
import useMusic from './hooks/useMusic'
import useCountdown from './hooks/useCountdown'
import Cover from './components/Cover'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Events from './components/Events'
import Dua from './components/Dua'
import Family from './components/Family'
import VenueMap from './components/VenueMap'
import Wishes from './components/Wishes'
import ContactSheet from './components/ContactSheet'

// bottom nav: [label, first section index, last section index]
const NAV = [['Events', 3, 3], ['Dua', 4, 4], ['Family', 5, 5], ['Venue', 6, 6], ['Wishes', 7, 7]]

export default function App() {
  const [on, toggleMusic] = useMusic()
  const [sheet, setSheet] = useState(false)
  const [cur, setCur] = useState(0)
  const [prog, setProg] = useState(0)
  const cd = useCountdown(INFO.valima)
  const sc = useRef(null)
  const bg = useRef(null)

  const go = (n) => sc.current?.children[n]?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    const el = sc.current
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); setCur(+e.target.dataset.i) }
      }),
      { root: el, threshold: 0.4 }
    )
      ;[...el.children].forEach((c) => io.observe(c))
    const onScroll = () => {
      setProg(el.scrollTop / (el.scrollHeight - el.clientHeight || 1))
      if (bg.current) bg.current.style.transform = `translateY(${-el.scrollTop * 0.18}px)` // parallax stars
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); el.removeEventListener('scroll', onScroll) }
  }, [])

  const pages = [
    <Cover onOpen={() => { go(1); if (!on) toggleMusic() }} />,
    <Hero />,
    <Countdown cd={cd} />,
    <Events />,
    <Dua />,
    <Family />,
    <VenueMap label="Nikkah · Bride’s Side" venue={INFO.bride.venue} query={INFO.bride.mapQ} embedded={INFO.bride.embedded} />,
    // <VenueMap label="Valima · Groom’s Side" venue={INFO.groom.venue} query={INFO.groom.mapQ} embedded={INFO.groom.embedded} />,
    <Wishes openContact={() => setSheet(true)} />,
  ]

  return (
    <div className="h-full relative overflow-hidden">
      <div ref={bg} className="stars absolute left-0 right-0 top-0 pointer-events-none" style={{ height: '160%' }} />
      <div className="absolute left-0 top-0 h-[3px] z-50 bg-gold" style={{ width: prog * 100 + '%' }} />

      <div ref={sc} className="scroller relative">
        {pages.map((pg, i) => <section key={i} data-i={i} className="sec">{pg}</section>)}
      </div>

      {cur > 0 && (
        <>
          <div className="absolute left-4 top-3 z-40 font-script text-gray-800 text-3xl">S &amp; W</div>
          <div className="absolute right-4 top-3 flex gap-2 z-40">
            <button onClick={() => setSheet(true)} className="btn solid">Contact</button>
            <button onClick={toggleMusic} aria-label="Toggle music" className="btn bg-navy" style={{ padding: '.65rem .9rem' }}>{on ? '♪ On' : '♪ Off'}</button>
          </div>
          <nav className="absolute left-1/2 -translate-x-1/2 bottom-3 z-40 card rounded-full px-2 py-1.5 flex max-w-[96%] overflow-x-auto">
            {NAV.map(([l, a, b]) => (
              <button key={l} onClick={() => go(a)} className={'pill ' + (cur >= a && cur <= b ? 'on' : '')}>{l}</button>
            ))}
          </nav>
        </>
      )}
      {sheet && <ContactSheet onClose={() => setSheet(false)} />}
    </div>
  )
}
