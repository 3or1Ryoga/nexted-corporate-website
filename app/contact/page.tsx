import { Phone, Mail, ExternalLink } from "lucide-react"
import FadeInSection from "../components/FadeInSection"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      label: "電話番号",
      value: "080-2512-0882",
      description: "お急ぎの場合はお電話でご連絡ください",
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      label: "企業・団体様向けメール",
      value: "isf66984@kwansei.ac.jp",
      description: "企業・団体様からのお問い合わせはこちら",
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      label: "運営メール",
      value: "viceangler@gmail.com",
      description: "一般的なお問い合わせはこちら",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: "#f0eee6" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-orange-500 mb-6">お問い合わせ</h1>
          <p className="text-xl text-gray-600">サービスへのご質問・不登校についてのご相談お待ちしております</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div
              className="border-2 border-orange-500 rounded-lg p-8 mb-12 text-center"
              style={{ backgroundColor: "#f0eee6" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせフォーム</h2>
              <p className="text-gray-700 mb-6">
                以下のフォームからお気軽にご相談ください。
                <br />
                24時間以内にご返信いたします。
              </p>
              <a
                href="https://docs.google.com/forms/d/1s31Ly8OpAe4OmojyYVJokHykn5FnUOdtG51ncCFdnTI/edit?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center btn-primary text-lg"
              >
                お問い合わせフォームはこちら
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </FadeInSection>

          {/* Contact Information */}
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">その他の連絡先</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg" style={{ backgroundColor: "#f0eee6" }}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">{contact.icon}</div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.label}</h3>
                      <p className="text-xl font-mono text-orange-500 mb-2">{contact.value}</p>
                      <p className="text-gray-600">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* LINE Contact */}
          <FadeInSection className="mt-12">
            <div className="rounded-lg p-8 text-center" style={{ backgroundColor: "#f0eee6" }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">LINEでのご相談</h3>
              <p className="text-gray-700 mb-6">
                より気軽にご相談いただけるよう、LINEでのサポートも行っております。
                <br />
                お友達登録後、お気軽にメッセージをお送りください。
              </p>
              <a href="https://lin.ee/gbOMc0n" target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  LINEで相談する
                </button>
              </a>
              <p className="text-sm text-gray-500 mt-4">※LINEのURLは後から設定可能です</p>
            </div>
          </FadeInSection>

          {/* Office Hours */}
          <FadeInSection className="mt-12">
            <div className="rounded-lg p-8" style={{ backgroundColor: "#f0eee6" }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">対応時間</h3>
              <div className="text-center text-gray-700">
                <p className="mb-2">平日：10:00 - 20:00</p>
                <p className="mb-2">土日祝：10:00 - 18:00</p>
                <p className="text-sm text-gray-500">※緊急時は上記時間外でも対応いたします</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
