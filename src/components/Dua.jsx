import { Wrap, Eyebrow, Orn } from './ui'

export default function Dua() {
  return (
    <Wrap>
      <Eyebrow>Our Dua</Eyebrow>
      <h2 className="font-script text-gray-800 text-4xl mt-2">With hearts full of gratitude</h2>
      <Orn />
      <p className="font-arabic text-gray-800 text-2xl leading-loose" dir="rtl">فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا</p>
      <p className="text-xl italic mt-3 text-mute">“For indeed, with hardship comes ease. Indeed, with hardship comes ease.”</p>
      <p className="text-xs text-gray-800 tracking-widest mt-2">QUR’AN 94 : 5–6</p>
      <p className="mt-5 text-xl leading-relaxed">By the mercy of Allah, two families are joined in prayer and joy. We humbly request your presence and duas as we begin this blessed journey together.</p>
      <Orn />
      <p className="font-arabic text-gray-800 text-3xl leading-loose" dir="rtl">وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>
      <p className="text-xl italic mt-3 text-mute">“And He placed between you affection and mercy.”</p>
      <p className="text-xs text-gray-800 tracking-widest mt-2">QUR’AN 30 : 21</p>
    </Wrap>
  )
}
