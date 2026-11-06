export const asset = (p) => import.meta.env.BASE_URL + p.replace(/^\//, '')
export const enc = encodeURIComponent
export const mapUrl = (q) => 'https://www.google.com/maps/search/?api=1&query=' + enc(q)
export const dirUrl = (q) => 'https://www.google.com/maps/dir/?api=1&destination=' + enc(q)
