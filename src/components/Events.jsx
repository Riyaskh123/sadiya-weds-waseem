import { INFO } from '../data/invitation'
import { dirUrl, enc } from '../utils'
import { Wrap, Eyebrow, Orn } from './ui'

export default function Events() {
  const { groom, bride } = INFO
  const cal = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + enc('Sadiya & Waseem – Valima') +
    '&dates=20261223/20261224&location=' + enc(groom.venue.join(', '))
  return (
    <Wrap>
      <Eyebrow>The Celebration</Eyebrow>
      <h2 className="font-script text-gold text-5xl mt-2 mb-6">Join us, <em>in shaa Allah</em></h2>
      <div className="card rounded-2xl px-6 py-8 w-full">
        <p className="eyebrow">Valima · Groom’s Side</p>
        <p className="font-script text-gold text-4xl mt-2">Wednesday</p>
        <p className="text-3xl">20<sup className='text-sm'>th</sup> · 12 · 2026</p>
        <Orn />
        <p className="eyebrow">Venue</p>
        <p className="text-xl mt-1">{groom.venue[0]}</p>
        <p className="text-mute">{groom.venue[1]}</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a className="btn solid" href={dirUrl(groom.mapQ)} target="_blank" rel="noopener noreferrer">Get Directions</a>
          <a className="btn" href={cal} target="_blank" rel="noopener noreferrer">Add to Calendar</a>
        </div>
      </div>
      <div className="card rounded-2xl px-6 py-8 w-full mt-8">
        <p className="eyebrow">Nikkah · Bride’s Side</p>
        <p className="font-script text-2xl mt-2">Date &amp; time to be shared by the family</p>
        <p className="mt-3 text-xl">{bride.venue[0]}, Kolar</p>
      </div>
    </Wrap>
  )
}
