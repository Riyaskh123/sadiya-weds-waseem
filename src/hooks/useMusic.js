import { useRef, useState } from 'react'
import { INFO } from '../data/invitation'
import { asset } from '../utils'

// Plays /public/music/<file> when INFO.musicSrc is set, otherwise a soft synthesized tune.
export default function useMusic() {
  const [on, setOn] = useState(false)
  const ref = useRef(null)

  const startSynth = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const master = ctx.createGain()
    master.gain.value = 0.0001
    master.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 3)
    const delay = ctx.createDelay(); delay.delayTime.value = 0.42
    const fb = ctx.createGain(); fb.gain.value = 0.45
    delay.connect(fb); fb.connect(delay)
    master.connect(ctx.destination); master.connect(delay); delay.connect(ctx.destination)
    const scale = [293.66, 329.63, 349.23, 392, 440, 466.16, 554.37, 587.33]
    const tone = (f, t, d, type, v) => {
      const o = ctx.createOscillator(), g = ctx.createGain()
      o.type = type; o.frequency.value = f
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(v, t + 0.05)
      g.gain.exponentialRampToValueAtTime(0.0001, t + d)
      o.connect(g); g.connect(master); o.start(t); o.stop(t + d + 0.1)
    }
    const melody = [0, 2, 4, 5, 4, 2, 1, 3, 4, 6, 5, 4, 2, 1, 0, 2]
    let step = 0
    const play = () => {
      const t = ctx.currentTime + 0.05
      if (step % 16 === 0) { tone(146.83, t, 7, 'sine', 0.18); tone(220, t, 7, 'sine', 0.1) }
      tone(scale[melody[step % 16]], t, 1.6, 'triangle', 0.16)
      step++
    }
    play()
    const id = setInterval(play, 520)
    ref.current = { stop: () => { clearInterval(id); master.gain.value = 0; ctx.close() } }
  }

  const startFile = () => {
    const a = new Audio(asset(INFO.musicSrc))
    a.loop = true; a.volume = 0.6
    a.play()
    ref.current = { stop: () => { a.pause(); a.src = '' } }
  }

  const toggle = () => {
    if (!on) {
      try { INFO.musicSrc ? startFile() : startSynth(); setOn(true) } catch (e) { /* autoplay blocked */ }
    } else {
      ref.current?.stop(); ref.current = null; setOn(false)
    }
  }
  return [on, toggle]
}
