"use client"
import { List } from "@/app/components/atoms/List"
import { MySekaiContextProvider } from "@/app/components/context"
import { Footer } from "@/app/components/Footer"
import { Header } from "@/app/components/Header"
import { Member, Tag } from "@/types"
import { FC } from "react"

type Props = {
  tags: Tag[]
  members: Member[]
}

export const View: FC<Props> = (props) => {
  return (
    <MySekaiContextProvider>
      <Header title="MORE MORE JUMP！版" />

      <main className="mx-auto max-w-7xl md:max-w-md">
        <div className="space-y-4 bg-white py-4 shadow-sm">
          <main className="mx-auto max-w-7xl md:max-w-md">
            {props.tags.length === 0 ? (
              <div className="space-y-4 px-4 text-sm">家具データ工事中...</div>
            ) : (
              <List {...props} />
            )}
          </main>
        </div>
      </main>

      <Footer />
    </MySekaiContextProvider>
  )
}
