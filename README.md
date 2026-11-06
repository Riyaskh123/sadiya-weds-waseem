# Sadiya & Waseem – Wedding Invitation (Vite + React + Tailwind CSS)

```bash
npm install
npm run dev        # local preview
npm run build      # production build in /dist (upload anywhere)
```

## What to edit
| What | Where |
|---|---|
| Names, venues, phone numbers, date, map searches | `src/data/invitation.js` |
| **First-page background image** | replace `public/images/cover-bg.svg` (or set `images.cover` to your `.jpg`) |
| **Banner slider images + captions** | `images.banners` in `src/data/invitation.js` – add/remove entries; files go in `public/images/` |
| Music | put an mp3 in `public/music/` and set `musicSrc`; empty = built-in soft tune |
| Colours | `tailwind.config.js` (`navy`, `gold`) and `src/index.css` |

## Structure
```
src/
  App.jsx                 scroll container, reveal effects, nav, music/contact buttons
  data/invitation.js      all content
  hooks/                  useMusic, useCountdown
  components/             Cover, Hero (+BannerSlider), Countdown, Events, Dua, Family, VenueMap, Wishes, ContactSheet
public/images, public/music
```
Tip: use compressed JPG/WebP (under ~300 KB each) so the invitation opens fast on mobile data.
