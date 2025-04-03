import { tags } from "@/data/furniture"
import { units } from "@/data/members"
import { getFilteredFurniture } from "@/lib/util"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { View } from "./View"

export const metadata: Metadata = {
  title: "ワンダーランズ×ショウタイム版 - とうふの森リアクション早見表",
  description: "プロジェクトセカイのマイセカイのリアクション早見表です。",
}

export default function Page() {
  const targetUnit = units.find((unit) => unit.id === "ws")
  if (!targetUnit) {
    notFound()
  }

  const unitMemberIds = targetUnit.members.map((member) => member.id)

  return (
    <Suspense>
      <View
        tags={getFilteredFurniture(unitMemberIds, tags)}
        members={targetUnit.members}
      />
    </Suspense>
  )
}
