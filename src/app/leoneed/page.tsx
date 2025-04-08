import { units } from "@/data/members"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { View } from "./View"

export const metadata: Metadata = {
  title: "Leo/need版 - とうふの森リアクション早見表",
  description: "プロジェクトセカイのマイセカイのリアクション早見表です。",
}

export default function Page() {
  const targetUnit = units.find((unit) => unit.id === "leoneed")
  if (!targetUnit) {
    notFound()
  }

  return (
    <Suspense>
      <View members={targetUnit.members} />
    </Suspense>
  )
}
