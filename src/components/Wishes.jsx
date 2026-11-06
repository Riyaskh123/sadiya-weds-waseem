import { enc } from '../utils'
import { Wrap, Eyebrow, Orn } from './ui'

export default function Wishes({ openContact }) {
  const wa = (num, who) =>
    'https://wa.me/91' + num + '?text=' + enc('Assalamu alaikum, congratulations to Sadiya & Waseem! May Allah bless you both. – ' + who)
  return (
    <Wrap>
      <Eyebrow>Your Blessings</Eyebrow>
      <h2 className="font-script text-gold text-4xl mt-2">Send your heartfelt wishes</h2>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <a className="btn solid" href={wa('6360021841', 'to the bride’s family')} target="_blank" rel="noopener noreferrer">Wish the Bride’s Family</a>
        <a className="btn" href={wa('7893466578', 'to the groom’s family')} target="_blank" rel="noopener noreferrer">Wish the Groom’s Family</a>
      </div>
      <Orn />
      <p className="font-arabic text-gold text-xl leading-loose" dir="rtl">بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ</p>
      <p className="mt-3 text-xl italic text-mute">May Allah bless you both and unite you in goodness.</p>
      <p className="mt-6 text-lg">With love from<br />The Families of Sadiya &amp; Waseem</p>
      <p className="font-script text-gold text-4xl mt-6">Sadiya &amp; Waseem</p>
      <p className="text-xs tracking-[.25em] uppercase text-mute mt-2">23 · December · 2026 · Valima<br />MBS Function Hall · Madanapalli Road</p>
      <button onClick={openContact} className="btn solid mt-8">Contact Us</button>
    </Wrap>
  )
}
