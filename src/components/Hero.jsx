import { INFO } from '../data/invitation'
import { Wrap } from './ui'
import BannerSlider from './BannerSlider'

const TICK = 'Sadiya ✦ Waseem ✦ 20 December 2026 ✦ Our Nikkah ✦ Kaaba Convention Centre ✦ Kolar ✦ '

export default function Hero() {
  const d = INFO.valimaLabel
  return (
    <Wrap>
      <div className="w-full mb-6"><BannerSlider slides={INFO.images.banners} /></div>
      <p className="font-arabic text-gray-800 text-3xl" dir="rtl">الْحَمْدُ لِلَّهِ</p>
      <h2 className="font-script text-gray-800 text-5xl mt-3 leading-tight">Sadiya &amp; Waseem</h2>
      <p className="eyebrow mt-3">Our Nikkah</p>

      <div className="grid grid-cols-4 gap-2 w-full mt-6">
        {[[d.day, 'Day'], [d.date, 'Date'], [d.month, 'Month'], [d.year, 'Year']].map(([a, b]) => (
          <div key={b} className="card rounded-xl py-3">
            <div className="text-2xl text-gray-800">{a}</div>
            <div className="text-[.6rem] tracking-widest uppercase text-mute">{b}</div>
          </div>
        ))}
      </div>
      <div className="overflow-hidden w-full mt-6 py-3 border-y border-gray-800/30">
        <div className="marq text-gray-800 text-lg tracking-widest whitespace-nowrap"><span>{TICK}</span><span>{TICK}</span></div>
      </div>
    </Wrap>
  )
}
