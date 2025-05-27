"use client"

import Image from "next/image"
import Link from "next/link"
import HeroSlideshow from "./components/HeroSlideshow"
import FadeInSection from "./components/FadeInSection"
import ContactCTA from "./components/ContactCTA"

export default function Home() {
  const handleLinkClick = () => {
    // スクロールを最上部に移動
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSlideshow />

      {/* NextEdとは */}
      <section className="py-16" style={{ backgroundColor: "#f8f8f1" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">NextEdについて</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>NextEdは、関西学院大学の大学生が立ち上げた不登校支援サービスです。</p>
                  <p>
                    不登校経験者が自らの体験を活かし、今まさに不登校で悩んでいる子どもたちと保護者の皆さまに「共感」と「安心」、そして実体験に基づく「キャリア提案」を届けることを目指します。
                  </p>
                  <p>
                    私たちは現在不登校のお子様がおられる保護者の皆さまに本当の意味で「お子様の状況・気持ち」を知っていただき、安心してお子様と向き合っていただけるよう、元当事者による面談形式のサポートを提供しています。
                  </p>
                  <p>
                    学校に「再登校」するためだけのサポートでなく、支援員の十人十色の経験から、今後のキャリア形成、社会復帰に向けた、お子様やご家族の状況に合わせた幅広いアドバイスを提供いたします。
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/logo_transpa.png?height=400&width=600"
                  alt="NextEdについて"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 学校復帰を望む方へ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/class_dark.jpg?height=400&width=600"
                  alt="学校復帰支援"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">学校復帰を望む方へ</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    不登校を経験したことのある私たちだからこそ分かるお子様の「見えない気持ち」に寄り添い、お子様にとって最善の選択肢を一緒に考えます。
                  </p>
                  <p>
                    不登校初期に特有の不安や焦りを、元当事者が一緒に整理し、学校との橋渡しや、お子様の立場に立ち、本人との対話のアドバイスなどを行います。
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/contact" onClick={handleLinkClick} className="btn-primary">
                    詳しく相談する
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 不登校から抜け出すきっかけが欲しい方へ */}
      <section className="py-16" style={{ backgroundColor: "#f8f8f1" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">不登校から抜け出すきっかけが欲しい方へ</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    「学校復帰が難しいかもしれない。でも、社会とつながってほしい、キャリアを考えるきっかけが欲しい」
                  </p>
                  <p>そんなお悩みにお答えします。</p>
                  <p>
                    通信制高校への進学、多様なキャリア支援、イベントの紹介、本人のやりたいこと探しなど、一歩ずつ前に進むための対話を行います。
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/contact" onClick={handleLinkClick} className="btn-primary">
                    キャリア相談をする
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="/girl.jpg?height=400&width=600"
                  alt="キャリア支援"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
