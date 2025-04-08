"use client"
import { ScrollUp } from "@/app/components/atoms/ScrollUp"
import { TagList } from "@/app/components/atoms/TagList"
import { MySekaiContextProvider } from "@/app/components/context"
import { Footer } from "@/app/components/Footer"
import { Header } from "@/app/components/Header"
import { Member } from "@/types"
import { FC } from "react"

type Props = {
  members: Member[]
}

export const View: FC<Props> = (props) => {
  return (
    <MySekaiContextProvider>
      <Header title="Vivid BAD SQUAD版" />

      <main className="mx-auto max-w-7xl md:max-w-md">
        <div className="space-y-4 bg-white py-4 shadow-sm">
          <TagList {...props} />
        </div>
      </main>

      <Footer />

      <ScrollUp />
    </MySekaiContextProvider>
  )
}
