// ─────────────────────────────────────────────────────────────
//  EDIT EVERYTHING HERE – names, venues, contacts, images, music
// ─────────────────────────────────────────────────────────────
export const INFO = {
  // Images live in /public/images. Replace the files (keep names) or change the paths below.
  images: {
    cover: 'images/cover-img.png', // first-page background (portrait photo works best, ~1080×1920)
    banners: [
      { src: 'images/banner-1.png', caption: 'Sadiya & Waseem', sub: '20 · 12 · 2026' },
      // { src: 'images/banner-2.png', caption: 'Alhamdulillah', sub: 'Wedding celebrations' }
    ], // add or remove banner slides freely (landscape or portrait photos, ~1600×1200)
  },

  // Put an mp3 in /public/music and set its path, e.g. 'music/nikkah.mp3'.
  // Leave empty to use the built-in soft synthesized tune.
  musicSrc: 'music/nikkah.mp3',

  valima: '2026-12-20T00:00:00+05:30',
  valimaLabel: { day: 'Sun', date: '20', month: 'DEC', year: '2026' },

  bride: {
    name: 'Sadiya Siddequa',
    line: 'D/o Late Syed Khader Mohiyudeen',
    mother: 'Ishrath Unnisa',
    paternal: 'Late Syed Abdul Malik',
    maternal: 'Late Osman Sharieff',
    addr: ['Dargah Shahi Mohalla,', 'Clock Tower, Kolar'],
    venue: ['Khabba Convention Hall', 'St. Anne’s High School', 'Near Bypass Road, Kolar – 563101'],
    mapQ: 'Khabba Convention Hall, St. Anne’s High School, Bypass Road, Kolar 563101',
    contacts: [['Syed Mansoor', '6360021841'], ['Syed Maqsood', '9620901956']],
    embedded:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497349.5160519661!2d77.77931033978528!3d13.128106000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badf087451e9b35%3A0x68c034a374dccf!2sKAABA%20Convention%20Centre!5e0!3m2!1sen!2sae!4v1793960286910!5m2!1sen!2sae"
  },
  groom: {
    name: 'S. Waseem Ahamed',
    line: 'S/o Shaik Mahaboob',
    mother: 'Shaik Sirajunnisa',
    paternal: 'Late S. Khader Saheb',
    maternal: 'Late S. Allabaksh',
    addr: ['Police Line Street, Oldpet,', 'Palamaner, Chittoor District'],
    venue: ['MBS Function Hall', 'Madanapalli Road'],
    mapQ: 'MBS Function Hall, Madanapalli Road, Palamaner',
    contacts: [['S. Mahaboob', '7893466578']],
    embedded:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.259504728206!2d78.7405402!3d13.2090175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad7eaeee50e7ff%3A0x92109ef644e66c76!2sMBS%20Function%20Hall!5e0!3m2!1sen!2sae!4v1793952858444!5m2!1sen!2sae"
  },
}
