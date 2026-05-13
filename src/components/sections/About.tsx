import { MapPin, Briefcase, User as UserIcon } from 'lucide-react'

export default function AboutSection(): React.ReactNode {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="text-orange-500">About Me</span>
            </h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              <div className="w-48 h-48 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white shadow-xl">
                <UserIcon size={80} className="opacity-80" />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    雨宮 泰斗{' '}
                    <span className="text-xl text-gray-500 font-normal">/ Taito Amemiya</span>
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={16} /> Tokyo / Kanagawa
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={16} /> Freelance Engineer & Musician
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    ITエンジニアとして10年のキャリアを持ち、現在はプロジェクトのリーダーとしてチームを牽引。要件定義から実装、AI技術の活用まで、幅広い技術領域でビジネスの課題解決に取り組んでいます。
                  </p>
                  <p>
                    同時に、ベーシストおよびキーボーディストとしての顔も持ち、音楽制作や楽譜の浄書・出版（Piascore）など、個人事業主としても活動を展開。
                  </p>
                  <p>
                    「論理的なエンジニアリング」と「感性豊かな音楽表現」。一見異なる二つの世界を横断し、それぞれの知見を活かし合うことで、独自の価値を生み出し続けています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
