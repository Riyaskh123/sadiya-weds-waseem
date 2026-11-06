import { useEffect, useState } from 'react'

export default function useCountdown(target) {
  const calc = () => {
    const d = new Date(target).getTime() - Date.now()
    if (d <= 0) return null
    return { Days: Math.floor(d / 864e5), Hours: Math.floor(d / 36e5) % 24, Min: Math.floor(d / 6e4) % 60, Sec: Math.floor(d / 1e3) % 60 }
  }
  const [v, setV] = useState(calc)
  useEffect(() => {
    const i = setInterval(() => setV(calc()), 1000)
    return () => clearInterval(i)
  }, [target])
  return v
}
