"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const currentDate = "2025年5月12日"

  const siteMapLinks = [
    { name: "ホーム", href: "/" },
    { name: "事業内容", href: "/services" },
    { name: "支援員紹介", href: "/staff" },
    { name: "ニュース", href: "/news" },
    { name: "お問い合わせ", href: "/contact" },
  ]

  const legalLinks = [
    { name: "プライバシーポリシー", href: "#" },
    { name: "利用規約", href: "#" },
  ]

  const handleLinkClick = () => {
    // スクロールを最上部に移動
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 第1列：企業情報 */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-2">NextEd</h3>
              <p className="text-lg font-semibold text-gray-300 mb-3">わかるから、寄り添える。</p>
              <p className="text-gray-400 leading-relaxed">
                不登校経験者だからこそ分かる、お子様の「見えない気持ち」に寄り添う
              </p>
            </div>
          </div>

          {/* 第2列：組織情報 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">組織情報</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>〒669-1337</p>
                  <p>兵庫県三田市学園4丁目2番</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a
                  href="tel:080-2512-0882"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  080-2512-0882
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a
                  href="mailto:k0tar0.n0198@gmail.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200 break-all"
                >
                  k0tar0.n0198@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* 第3列：サイトマップ */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">サイトマップ</h4>
            <nav className="space-y-2">
              {siteMapLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-gray-400 hover:text-orange-500 transition-colors duration-200 hover:translate-x-1 transform transition-transform"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* 第4列：法的情報 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">法的情報</h4>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <span
                  key={link.name}
                  className="block text-gray-400 hover:text-orange-500 transition-colors duration-200 hover:translate-x-1 transform transition-transform cursor-pointer"
                >
                  {link.name}
                  {link.href === "#" && <span className="text-xs text-gray-500 ml-2">(準備中)</span>}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* フッター最下部 */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center text-gray-400 space-y-2">
            <p className="text-sm">© {currentYear} NextEd All rights reserved.</p>
            <p className="text-xs text-gray-500">{currentDate}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
