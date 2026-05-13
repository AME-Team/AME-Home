import { Mail, Globe, MessageSquare, ArrowRight } from 'lucide-react'

export default function ContactSection(): React.ReactNode {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-red-500">Contact</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            プロジェクトのご相談、音楽制作の依頼、その他のお問い合わせはこちらから。
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
          <div className="space-y-8">
            <a
              href="mailto:contact@example.com"
              className="flex items-center justify-between p-4 rounded-xl bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-500/20 rounded-lg">
                  <Mail />
                </div>
                <div className="text-left">
                  <h3 className="font-bold">Email</h3>
                  <p className="text-sm opacity-80">直接メールで連絡する</p>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex justify-center gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
              <a
                href="#"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              >
                <Globe size={24} />
                <span className="sr-only">Website</span>
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              >
                <MessageSquare size={24} />
                <span className="sr-only">Social Media</span>
              </a>
            </div>

            <p className="text-xs text-center text-gray-500 mt-6">
              ※ 現在ダミーリンクです。適宜Googleフォーム等へのリンクに差し替えてご使用ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
