import { Tag, Unit } from "@/types"

export const getFilteredFurniture = (
  memberIds: string[],
  tags: Tag[],
): Tag[] => {
  return tags
    .map((tag) => {
      // 家具のリストをフィルタリング
      const filteredFurniture = tag.furnitureList.map((furniture) => {
        // 家具のリアクションリストをフィルタリング
        const filteredReactions = furniture.reactions
          .map((reaction) => {
            // リアクションがメンバーIDリストに含まれている場合のみ残す
            return reaction.filter((memberId) => memberIds.includes(memberId))
          })
          .filter((reaction) => reaction.length > 0) // 空のリアクションは除外

        // 家具のリアクションをfilteredReactionsで更新
        return {
          ...furniture,
          reactions: filteredReactions, // フィルタリングされたリアクションを更新
        }
      })

      // 家具が1つでもリアクションを持っているものだけを残す
      const nonEmptyFurniture = filteredFurniture.filter(
        (furniture) => furniture.reactions.length > 0,
      )

      // 家具が1つでも残ったタグのみ返す
      if (nonEmptyFurniture.length > 0) {
        return {
          ...tag,
          furnitureList: nonEmptyFurniture, // リアクションが空でない家具のみ
        }
      }
      // 家具が1つも残っていないタグは返さない
      return null
    })
    .filter((tag) => tag !== null) // null のカテゴリを除外
}

// 指定したユニットIDのメンバーを取得する
export const getMembersByUnitId = (
  unitId: string,
  units: Unit[],
): string[][] => {
  return units
    .filter((unit) => unit.id === unitId)
    .flatMap((unit) => unit.members.map((member) => [member.id]))
}

// メンバーIDを指定して、指定のIDのみまたは指定のIDを除外したメンバーを取得
export const filterMemberIdsById = (
  memberIds: string[][],
  targetIds: string[],
  exclude: boolean = false,
): string[][] => {
  const memberIdsFlattened = memberIds.map((pair) => pair[0]) // 2次元配列を1次元配列に変換
  let filteredIds: string[]

  if (exclude) {
    // 指定のIDを除外して残りを取得
    filteredIds = memberIdsFlattened.filter((id) => !targetIds.includes(id))
  } else {
    // 指定のIDのみ取得
    filteredIds = memberIdsFlattened.filter((id) => targetIds.includes(id))
  }

  // 結果を2次元配列に戻す
  return filteredIds.map((id) => [id])
}

// 除外する文字列
const excludeStrings = ["miku", "rin", "len", "luka", "kaito", "meiko"]

const getCombinations = (arr: string[]) => {
  const result: string[][] = []

  // ペアの組み合わせを生成
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push([arr[i], arr[j]])
    }
  }

  // 全員の組み合わせに対して、除外条件を適用
  if (arr.length > 1) {
    const filteredArr = arr.filter(
      (memberId) =>
        !excludeStrings.some((exclude) => memberId.includes(exclude)), // 部分一致で除外
    )
    if (filteredArr.length > 1) {
      result.push(filteredArr) // 除外後の全員の組み合わせ
    }
  }

  return result
}

// 指定したユニットIDの組み合わせを取得する
export const getCombinationsByUnitId = (unitId: string, units: Unit[]) => {
  // 指定されたユニットIDでユニットをフィルタリング
  const unit = units.find((u) => u.id === unitId)

  if (!unit) {
    throw new Error(`ユニットID "${unitId}" は存在しません`)
  }

  // ユニットのメンバーIDを取得
  const memberIds = unit.members.map((member) => member.id)

  // ペアと全員の組み合わせを一気に取得
  return getCombinations(memberIds)
}
