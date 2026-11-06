import { dirUrl, mapUrl } from '../utils'
import { Wrap, Eyebrow } from './ui'

// Stylised map card + buttons that open the venue in Google Maps
export default function VenueMap({ label, venue, query, embedded }) {
  return (
    <Wrap>
      <Eyebrow>{label}</Eyebrow>
      <h2 className="font-script text-gold text-5xl mt-2 mb-5">Find the venue</h2>
      <div className="card rounded-2xl overflow-hidden w-full">
        <iframe src={embedded} className="w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" />
        <div className="px-6 py-6">
          <div className="text-xl leading-snug">{venue.map((l) => <p key={l}>{l}</p>)}</div>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a className="btn solid" href={mapUrl(query)} target="_blank" rel="noopener noreferrer">View on Maps</a>
            <a className="btn" href={dirUrl(query)} target="_blank" rel="noopener noreferrer">Directions</a>
          </div>
        </div>
      </div>
    </Wrap>
  )
}
