import { INFO } from '../data/invitation'

export default function ContactSheet({ onClose }) {
  const groups = [['Bride’s Side', INFO.bride.contacts], ['Groom’s Side', INFO.groom.contacts]]
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/65" onClick={onClose}>
      <div className="card rounded-2xl w-full max-w-md p-6 fade-in max-h-[85%] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center">
          <h3 className="font-script text-gray-800 text-4xl">Contact</h3>
          <button onClick={onClose} aria-label="Close" className="text-gray-800 text-2xl px-2">×</button>
        </div>
        {groups.map(([g, list]) => (
          <div key={g} className="mt-5">
            <p className="eyebrow">{g}</p>
            {list.map(([n, t]) => (
              <div key={t} className="mt-3 flex items-center justify-between gap-3 flex-wrap">
                <div><p className="text-xl">{n}</p><p className="text-mute">{t}</p></div>
                <div className="flex gap-2">
                  <a className="btn solid" href={'tel:+91' + t}>Call</a>
                  <a className="btn" href={'https://wa.me/91' + t} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
