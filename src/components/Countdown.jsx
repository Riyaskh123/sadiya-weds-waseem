import { Wrap, Eyebrow } from './ui'

export default function Countdown({ cd }) {
  return (
    <Wrap>
      <Eyebrow>Counting down to forever</Eyebrow>
      <h2 className="font-script text-gray-800 text-5xl mt-3">The day draws near</h2>
      <div className="grid grid-cols-4 gap-3 mt-8 w-full">
        {cd ? Object.entries(cd).map(([l, n]) => (
          <div key={l} className="card rounded-xl py-5">
            <div className="text-4xl text-gray-800">{String(n).padStart(2, '0')}</div>
            <div className="text-[.65rem] tracking-widest uppercase text-mute mt-1">{l}</div>
          </div>
        )) : <p className="col-span-4 text-2xl text-gray-800">Alhamdulillah — the day is here</p>}
      </div>
    </Wrap>
  )
}
