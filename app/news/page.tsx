import FadeInSection from "../components/FadeInSection"
import ContactCTA from "../components/ContactCTA"

export default function News() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: "#f0eee6" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-orange-500 mb-6">ニュース</h1>
          <p className="text-xl text-gray-600">NextEdの最新情報をお届けします</p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-12" style={{ backgroundColor: "#f0eee6" }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Coming Soon</h2>
              <p className="text-xl text-gray-600 mb-8">
                ニュースページは現在準備中です。
                <br />
                近日中にNextEdの活動報告や最新情報を掲載予定です。
              </p>
              <p className="text-gray-500">今後はNoteでの記事まとめなども予定しております。</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
