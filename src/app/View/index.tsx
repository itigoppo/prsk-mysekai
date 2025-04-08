"use client"
import { Footer } from "@/app/components/Footer"
import { Header } from "@/app/components/Header"
import { FC } from "react"

export const View: FC = () => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl md:max-w-md">
        <div className="space-y-4 bg-white p-4 shadow-sm">
          <div>
            とうふの森のリアクションみたかチェック表。
            <br />
            4.5周年までの家具はアーカイブから見た。全部あるはずだ。
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>
              データはブラウザ保存なのでこのサイトを開くために使うアプリが変わると共有はできません。
            </li>
            <li>PC版とスマホ版でもデータは引き継がれません。</li>
            <li>
              例えば、スマホ版Google
              Chromeで開いていたのをスマホ版Safariで開くとデータは消えます。
            </li>
            <li>
              逆に、スマホ版Google Chromeで開いていたのをスマホ版Google
              Chromeで開く分にはデータは消えません。
            </li>
            <li>
              ただし、PC版Google Chromeで開いていたのをスマホ版Google
              Chromeで開くとデータは消えます。
            </li>
            <li>
              それぞれのブラウザでは残っているので再開したい場合はそれぞれのブラウザで開いてください。
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  )
}
