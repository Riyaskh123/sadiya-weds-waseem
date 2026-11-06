import { INFO } from '../data/invitation'
import { Wrap, Eyebrow, Orn } from './ui'

function FamilyCard({ p, label }) {
  return (
    <div className="card rounded-2xl px-6 py-9 w-full">
      <Eyebrow>{label}</Eyebrow>
      <h3 className="font-script text-gray-800 text-4xl mt-3">{p.name}</h3>
      <p className="mt-3 text-xl">{p.line}</p>
      <p className="text-xl">Mother: {p.mother}</p>
      <Orn />
      <p className="text-lg text-mute">Paternal: {p.paternal}</p>
      <p className="text-lg text-mute">Maternal: {p.maternal}</p>
      <Orn />
      <div className="text-lg text-mute">{p.addr.map((a) => <p key={a}>{a}</p>)}</div>
    </div>
  )
}

export default function Family() {
  return (
    <Wrap>
      <Eyebrow>Two Families, One Journey</Eyebrow>
      <h2 className="font-script text-gray-800 text-4xl mt-2 mb-6">With the blessings of our families</h2>
      <FamilyCard p={INFO.bride} label="Bride" />
      <p className="text-gray-800 text-2xl my-4">✦</p>
      <FamilyCard p={INFO.groom} label="Groom" />
      <p className="mt-6 text-lg italic text-mute">With warm regards and heartfelt duas from the families of Kolar &amp; Palamaner</p>
    </Wrap>
  )
}
