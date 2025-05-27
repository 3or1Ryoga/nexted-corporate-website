import Image from "next/image"
import { ExternalLink } from "lucide-react"
import FadeInSection from "../components/FadeInSection"
import ContactCTA from "../components/ContactCTA"

export default function Staff() {
  const staffMember = {
    name: "西田昂平",
    position: "代表・支援員",
    image: "/nishida2.jpeg?height=300&width=300",
    experience: [
      "関西学院大学経済学部在学中",
      "中学2年生から高校1年生まで不登校を経験",
      "2022年4月〜2025年3月学校法人角川ドワンゴ学園N高等学校",
    ],
    message:
      "「いきなり不登校になってしまった。」「この子の将来は大丈夫なんだろうか？」そう心配になる気持ちはとても理解できるものです。私が不登校になった当時も、心配をかけているんだろうなと思うことは多々ありました。要は、子どもは親の感情をよく観察しているケースがあるということです。だからこそ、お子さんを信頼してあげてほしいと思います。大事なのは、不登校かそうじゃないかではなく、楽しく日常を過ごせているか否か。学校に行けていてもストレスで押し潰されそうな毎日では意味がありません。まずは面談を通して、「一人ひとりに合った教育」を見つけてみませんか？",
    }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: "#f0eee6" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-orange-500 mb-6">支援員紹介</h1>
          <p className="text-xl text-gray-600">経験豊富な支援員がお子様とご家族をサポートします</p>
        </div>
      </section>

      {/* Staff Profile */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: "#f0eee6" }}>
              <div className="md:flex">
                <div className="md:w-1/3 p-8 flex flex-col items-center" style={{ backgroundColor: "#f8f8f1" }}>
                  <Image
                    src={staffMember.image || "/placeholder.svg"}
                    alt={staffMember.name}
                    width={300}
                    height={300}
                    className="rounded-full mb-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{staffMember.name}</h2>
                  <p className="text-orange-500 font-semibold">{staffMember.position}</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">経歴</h3>
                  <ul className="space-y-2 mb-6">
                    {staffMember.experience.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-orange-500 mr-3">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">メッセージ</h3>
                  <p className="text-gray-700 leading-relaxed">{staffMember.message}</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* 追加メンバー用のプレースホルダー */}
          <FadeInSection className="mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">さらなる支援員を募集中</h3>
              <p className="text-gray-700 mb-6">不登校経験者で、同じ悩みを持つ方々をサポートしたい方を募集しています</p>
              <a
                href="https://docs.google.com/forms/d/1W7O8nqklyTtIPoL-taeHoJxuYWZ53Rgl-GYdiNa27-I/edit?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                支援員として参加する
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
