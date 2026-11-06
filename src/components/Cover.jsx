import { INFO } from '../data/invitation'
import { asset } from '../utils'
import { Wrap } from './ui'

// First page – full-bleed background image (INFO.images.cover) with a navy overlay for readable text
export default function Cover({ onOpen }) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${asset(INFO.images.cover)})` }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,31,77,.55), rgba(10,31,77,.78) 55%, rgba(10,31,77,.95))' }} />
      <div className="relative z-10 w-full">
        <Wrap>
          <p className="font-arabic text-gold text-4xl" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p className="mt-8 tracking-[.35em] text-xs uppercase text-gold">— By the grace of Allah —</p>
          <h1 className="font-script text-gold leading-none mt-6" style={{ fontSize: 'clamp(4rem,18vw,6.5rem)' }}>
            Sadiya<br /><span className="text-3xl text-ink">&amp;</span><br />Waseem
          </h1>
          <p className="mt-6 text-2xl italic">Our Valima</p>
          <p className="mt-2 tracking-[.3em] text-sm text-mute">Sunday · 20<sup>th</sup> December 2026</p>
          <button onClick={onOpen} className="btn mt-10">Open Invitation</button>
          <p className="bounce text-gold text-2xl mt-8">⌄</p>
        </Wrap>
      </div>
    </>
  )
}
