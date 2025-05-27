"use client"

import Link from "next/link"
import { MessageCircle, ArrowRight } from "lucide-react"
import FadeInSection from "./FadeInSection"

export default function ContactCTA() {
  const handleLinkClick = () => {
    // スクロールを最上部に移動
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="py-16" style={{ backgroundColor: "#f0eee6" }}>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12" style={{ backgroundColor: "#f8f8f1" }}>
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-full">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ご質問・ご相談はお気軽に
              <span className="text-orange-500">お問い合わせください</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              不登校に関するお悩み、サービスについてのご質問をお待ちしております
              <br className="hidden sm:block" />
              専門の支援員が丁寧にお答えいたします
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                お問い合わせはこちら
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <div className="text-sm text-gray-500">
                <span className="block">📞 080-2512-0882</span>
                <span className="block">平日 10:00-20:00 / 土日祝 10:00-18:00</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                24時間以内にご返信いたします。お急ぎの場合はお電話でご連絡ください。
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
