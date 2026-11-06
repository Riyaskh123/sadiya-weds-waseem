import { useEffect, useRef, useState } from 'react'
import { asset } from '../utils'

// Banner image slider: autoplay, swipe, arrows, dots, caption.
// slides = [{ src, caption, sub }]  (configured in src/data/invitation.js)
export default function BannerSlider({ slides, interval = 4500 }) {
  const [i, setI] = useState(0)
  const [broken, setBroken] = useState({})
  const touch = useRef(null)
  const n = slides.length
  const go = (k) => setI((k + n) % n)

  useEffect(() => {
    if (n < 2) return
    const t = setInterval(() => setI((x) => (x + 1) % n), interval)
    return () => clearInterval(t)
  }, [n, interval, i])

  const onEnd = (e) => {
    if (!touch.current) return
    const dx = e.changedTouches[0].clientX - touch.current
    if (Math.abs(dx) > 45) go(i + (dx < 0 ? 1 : -1))
    touch.current = null
  }

  return (
    <div
      className="card rounded-2xl w-full relative overflow-hidden select-none"
      style={{ aspectRatio: '16 / 10', maxHeight: '58vh' }}
      onTouchStart={(e) => { touch.current = e.touches[0].clientX }}
      onTouchEnd={onEnd}
    >
      <div className="absolute inset-0">
        {slides.map((s, k) => (
          <div key={k} className={'slide ' + (k === i ? 'on' : '')}>
            {/* gradient fallback shows if the image file is missing */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1f50b0] to-[#0a1f4d]" />
            {!broken[k] && (
              <img
                src={asset(s.src)}
                alt={s.caption}
                loading={k === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 w-full h-full object-cover"
                onError={() => setBroken((b) => ({ ...b, [k]: true }))}
              />
            )}
            <div className="absolute inset-x-0 bottom-0 pt-16 pb-9 px-4 text-center bg-gradient-to-t from-[#0a1f4d]/90 to-transparent">
              <p className="font-script text-gold text-2xl leading-tight">{s.caption}</p>
              {s.sub && <p className="text-mute tracking-widest text-xs uppercase mt-1">{s.sub}</p>}
            </div>
          </div>
        ))}

        {n > 1 && (
          <>
            <button onClick={() => go(i - 1)} aria-label="Previous banner" className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0a1f4d]/60 text-gold text-xl">‹</button>
            <button onClick={() => go(i + 1)} aria-label="Next banner" className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0a1f4d]/60 text-gold text-xl">›</button>
            <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
              {slides.map((_, k) => (
                <button key={k} onClick={() => go(k)} aria-label={'Banner ' + (k + 1)} className="h-2 rounded-full transition-all" style={{ width: k === i ? 22 : 8, background: k === i ? '#d9b96a' : 'rgba(217,185,106,.4)' }} />
              ))}
            </div>
            <p className="absolute top-3 right-4 text-xs tracking-widest text-ink/80">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</p>
          </>
        )}
      </div>
    </div>
  )
}
