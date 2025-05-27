import Image from "next/image"
import { Users, Heart, Target, ArrowRight } from "lucide-react"
import FadeInSection from "../components/FadeInSection"
import ContactCTA from "../components/ContactCTA"

export default function Services() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "第1の特徴",
      description:
        "元不登校経験者による共感的なサポート。同じ経験をした支援員だからこそ理解できる気持ちに寄り添います。",
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: "第2の特徴",
      description:
        "お子様とご家族の状況に合わせたオーダーメイドのアドバイス。画一的ではない、個別性を重視したサポートを提供します。",
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "第3の特徴",
      description: "学校復帰だけでなく、多様なキャリア形成を見据えた幅広い選択肢の提案。お子様の将来を一緒に考えます。",
    },
  ]

  const supportFlow = [
    {
      step: "1",
      title: "初回相談",
      description: "お子様の状況やご家族のお悩みをお聞かせください",
      image: "/support_steps1_1.png?height=200&width=200",
      alt: "初回相談の様子",
    },
    {
      step: "2",
      title: "支援員マッチング",
      description: "お子様に最適な支援員をご紹介いたします",
      image: "/support_steps2.png?height=200&width=200",
      alt: "支援員マッチングのイメージ",
    },
    {
      step: "3",
      title: "対話セッション",
      description: "支援員との定期的な面談を通じてサポートを行います",
      image: "/support_steps3.png?height=200&width=200",
      alt: "対話セッションの様子",
    },
    {
      step: "4",
      title: "継続フォロー",
      description: "お子様の成長に合わせて継続的にサポートいたします",
      image: "/support_steps4_2.png?height=200&width=200",
      alt: "継続フォローのイメージ",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: "#f0eee6" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-orange-500 mb-6">事業内容</h1>
          <p className="text-xl text-gray-600">NextEdのサービス詳細をご紹介します</p>
        </div>
      </section>

      {/* サービス概要 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">NextEdのサービス概要について</h2>
            <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
              <p>
                NextEdは元不登校の支援員と、今現在不登校に悩んでいる保護者の方、そしてお子様をつなげる対談支援サービスです。私たちは現在不登校のお子様がおられる保護者の皆さまに本当の意味で「お子様の状況・気持ち」を知っていただき、安心してお子様と向き合っていただけるよう、元当事者による面談形式のサポートを提供しています。
              </p>
              <p>
                学校に「再登校」するためだけのサポートでなく、支援員の十人十色の経験から、今後のキャリア形成、社会復帰に向けた、お子様やご家族の状況に合わせた幅広いアドバイスを提供いたします。また、もしお話することが叶いましたら、支援員がお子様と同じ目線に立って、進路相談や学校での悩み、家庭での悩みなどについてのカウンセリングを行うサービスも提供いたします。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 事業の背景と目的 */}
      <section className="py-16" style={{ backgroundColor: "#f8f8f1" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">事業の背景と目的</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>NextEdは、関西学院大学の大学生が立ち上げた不登校支援サービスです。</p>
                  <p>
                    不登校経験者が自らの体験を活かし、今まさに不登校で悩んでいる子どもたちと保護者の皆さまに「共感」と「安心」、そして実体験に基づく「キャリア提案」を届けることを目指します。
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/support_stepps.jpg?height=400&width=600"
                  alt="事業の背景"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* サービスの特徴 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">サービスの特徴</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ backgroundColor: "#f0eee6" }}
                >
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 他サービスとの違い */}
      <section className="py-16" style={{ backgroundColor: "#f8f8f1" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">他サービスとの違い</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg" style={{ backgroundColor: "#f0eee6" }}>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  一般的な不登校支援サービスとは異なり、NextEdは実際に不登校を経験した大学生が支援員として関わることで、より深い共感と理解に基づいたサポートを提供します。
                </p>
                <p>
                  また、学校復帰を最終目標とするのではなく、お子様一人ひとりの個性や状況に合わせた多様な進路選択をサポートし、将来のキャリア形成まで見据えた包括的なアドバイスを行います。
                </p>
                <p>
                  支援員自身の体験談や乗り越えた方法を共有することで、お子様とご家族に希望と具体的な解決策を提供できることが、NextEdの大きな特徴です。
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 支援の流れ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">支援の流れ</h2>

            {/* デスクトップ版 - 横並び */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* 矢印のライン */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 transform -translate-y-1/2 z-0"></div>

                <div className="grid grid-cols-4 gap-8 relative z-10">
                  {supportFlow.map((step, index) => {
                    return (
                      <div key={index} className="text-center">
                        {/* ステップ番号 */}
                        <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-20">
                          {step.step}
                        </div>

                        {/* 画像 */}
                        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={step.alt}
                            width={200}
                            height={200}
                            className="rounded-lg shadow-lg mx-auto"
                          />
                        </div>

                        {/* タイトルと説明 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg" style={{ backgroundColor: "#f0eee6" }}>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                        </div>

                        {/* 矢印（最後以外） */}
                        {index < supportFlow.length - 1 && (
                          <div className="absolute top-8 left-full transform -translate-x-1/2 translate-x-8 z-30">
                            <ArrowRight className="h-8 w-8 text-orange-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* タブレット版 - 2x2グリッド */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-12 relative">
                {supportFlow.map((step, index) => {
                  // タブレット版でのみステップ3と4を入れ替え
                  let displayIndex = index
                  if (index === 2) displayIndex = 3
                  if (index === 3) displayIndex = 2

                  const displayStep = supportFlow[displayIndex]

                  return (
                    <div key={index} className="text-center relative">
                      {/* ステップ番号 */}
                      <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                        {displayStep.step}
                      </div>

                      {/* 画像 */}
                      <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                        <Image
                          src={displayStep.image || "/placeholder.svg"}
                          alt={displayStep.alt}
                          width={200}
                          height={200}
                          className="rounded-lg shadow-lg mx-auto"
                        />
                      </div>

                      {/* タイトルと説明 */}
                      <div className="bg-white p-6 rounded-lg shadow-lg" style={{ backgroundColor: "#f0eee6" }}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{displayStep.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{displayStep.description}</p>
                      </div>
                    </div>
                  )
                })}

                {/* 矢印の配置 */}
                {/* 1→2の矢印 */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-orange-500 animate-pulse" />
                </div>

                {/* 2→4の矢印（下向き） */}
                <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 rotate-90 z-10">
                  <ArrowRight className="h-8 w-8 text-orange-500 animate-pulse" />
                </div>

                {/* 4→3の矢印（左向き） */}
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-180 z-10">
                  <ArrowRight className="h-8 w-8 text-orange-500 animate-pulse" />
                </div>
              </div>
            </div>

            {/* モバイル版 - 縦並び */}
            <div className="block md:hidden">
              <div className="space-y-12">
                {supportFlow.map((step, index) => (
                  <div key={index} className="text-center relative">
                    {/* ステップ番号 */}
                    <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                      {step.step}
                    </div>

                    {/* 画像 */}
                    <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.alt}
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg mx-auto"
                      />
                    </div>

                    {/* タイトルと説明 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg" style={{ backgroundColor: "#f0eee6" }}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>

                    {/* 下向き矢印（最後以外） */}
                    {index < supportFlow.length - 1 && (
                      <div className="flex justify-center mt-8">
                        <div className="transform rotate-90">
                          <ArrowRight className="h-8 w-8 text-orange-500 animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 対応可能なケース例 */}
      <section className="py-16" style={{ backgroundColor: "#f8f8f1" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">対応できるケース例</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg" style={{ backgroundColor: "#f0eee6" }}>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  学校に行きたいけれど、なかなか一歩が踏み出せない
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  通信制高校への転校を検討している
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  将来の進路について相談したい
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  親子関係の改善について悩んでいる
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  社会復帰に向けた準備をしたい
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  同じ経験をした人の話を聞きたい
                </li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
