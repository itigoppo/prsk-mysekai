import { Furniture, MemberWithItemNames, Reaction, Tag, Unit } from "@/types"

// メンバーIDリストを受け取り、リアクションがそのメンバーIDを含むものだけを残す
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
            // memberIdsと一致するメンバーIDのみ残す
            const filteredMemberIds = reaction.memberIds.filter((memberId) =>
              memberIds.includes(memberId),
            )
            // memberIdsが1つでも残ったら、Reactionとして残す
            if (filteredMemberIds.length > 0) {
              return {
                ...reaction,
                memberIds: filteredMemberIds, // フィルタリングしたmemberIdsを更新
              }
            }
            return null
          })
          .filter((reaction) => reaction !== null) // nullのリアクションは除外

        // 家具のリアクションをfilteredReactionsで更新
        return {
          ...furniture,
          reactions: filteredReactions as Reaction[], // フィルタリングされたリアクションを更新
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

// 1人でのリアクションのみを持つ家具をフィルタリング
export const filterByOneReaction = (tags: Tag[], q?: string): Tag[] => {
  return tags
    .map((tag) => ({
      ...tag,
      furnitureList: tag.furnitureList
        .filter((furniture) => q === undefined || furniture.name.includes(q)) // 家具名でフィルタリング
        .map((furniture) => ({
          ...furniture,
          reactions: furniture.reactions.filter(
            (reaction) => reaction.memberIds.length === 1, // memberIdsの長さが1のリアクションのみを残す
          ),
        }))
        .filter((furniture) => furniture.reactions.length > 0), // 1件のリアクションを持つ家具のみ残す
    }))
    .filter((tag) => tag.furnitureList.length > 0) // 家具が残っているTagのみ残す
}

// 2人以上でのリアクションを持つの家具をフィルタリング
export const filterByReactionsCount = (tags: Tag[], q?: string): Tag[] => {
  return tags
    .map((tag) => ({
      ...tag,
      furnitureList: tag.furnitureList
        .filter((furniture) => q === undefined || furniture.name.includes(q)) // 家具名でフィルタリング
        .map((furniture) => ({
          ...furniture,
          // 2件以上のリアクションのみを残す
          reactions: furniture.reactions.filter(
            (reaction) => reaction.memberIds.length >= 2, // memberIdsの長さでフィルタリング
          ),
        }))
        .filter((furniture) => furniture.reactions.length > 0), // 2件以上のリアクションを持つ家具のみ残す
    }))
    .filter((tag) => tag.furnitureList.length > 0) // 家具が残っているTagのみ残す
}

// 全てのリアクションが確認済みの家具を除外する
export const filterByCompleteReaction = (
  tags: Tag[],
  excludeChecked: boolean,
  savedReactions: Record<string, string[]>,
): Tag[] => {
  if (!excludeChecked) {
    return tags
  }

  return tags
    .map((tag) => ({
      ...tag,
      furnitureList: tag.furnitureList.filter((furniture) => {
        const totalCount = furniture.reactions.length
        let checkedCount = 0
        furniture.reactions.map((reaction) => {
          const saveValue = reaction.memberIds.join("_")
          const checked =
            savedReactions[`${tag.id}_${furniture.id}`]?.includes(saveValue)
          if (checked) {
            checkedCount++
          }
        })
        const isComplete = checkedCount === totalCount

        return !isComplete // 全リアクション確認済みのものは除外
      }),
    }))
    .filter((tag) => tag.furnitureList.length > 0) // 家具が残っているTagのみ残す
}

// 家具のデータを作成する
export const createFurniture = (
  id: string,
  name: string,
  reactions: Reaction[],
): Furniture => ({
  id,
  name,
  reactions,
})

// タグのデータを作成する
export const createTag = (
  id: string,
  name: string,
  furnitureList: Furniture[],
): Tag => ({
  id,
  name,
  furnitureList,
})

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
): Reaction[] => {
  const memberIdsFlattened = memberIds.map((pair) => pair[0]) // 2次元配列を1次元配列に変換
  let filteredIds: string[]

  if (exclude) {
    // 指定のIDを除外して残りを取得
    filteredIds = memberIdsFlattened.filter((id) => !targetIds.includes(id))
  } else {
    // 指定のIDのみ取得
    filteredIds = memberIdsFlattened.filter((id) => targetIds.includes(id))
  }

  // 結果を2次元配列に戻す、Reaction型に変換
  return convertToReactions(filteredIds.map((id) => [id]))
}

// 除外する文字列
const excludeStrings = ["miku", "rin", "len", "luka", "kaito", "meiko"]

// ユニットのメンバーIDの組み合わせを取得する
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

// メンバーIDリストをReaction型の形式に変換する
export const convertToReactions = (members: string[][]): Reaction[] => {
  return members.map((memberIds) => {
    // デフォルトのreactionオブジェクト
    return { memberIds }
  })
}

// withItemNamesListを基に、ReactionにwithItemNamesを追加する
export const addWithItemNamesToReactions = (
  reactions: Reaction[],
  withItemNamesList: MemberWithItemNames[],
): Reaction[] => {
  return reactions.map((reaction) => {
    // `withItemNamesList`に一致する`memberIds`を持つ要素を検索
    const matchingWithItemNames = withItemNamesList.find(
      ({ memberIds: listMemberIds }) =>
        listMemberIds.every((id) => reaction.memberIds.includes(id)), // memberIdsが一致する場合
    )?.withItemNames

    // 一致するwithItemNamesがあれば追加
    if (matchingWithItemNames) {
      return {
        ...reaction,
        withItemNames: matchingWithItemNames,
      }
    }

    return reaction
  })
}

// 指定した家具名に一致するタグIDと家具IDを取得する
export const findTagAndFurnitureByItemNames = (
  tags: Tag[],
  itemNames: string[],
): { tagId: string; furnitureId: string }[] => {
  const resultSet = new Set<string>() // 組み合わせを一意に保つためのSet

  const result: { tagId: string; furnitureId: string }[] = []

  // tagsをループして処理
  tags.forEach((tag) => {
    tag.furnitureList.forEach((furniture) => {
      // furniture.name が itemNames 配列の中のいずれかと一致するかを確認
      if (itemNames.includes(furniture.name)) {
        const key = `${tag.id}-${furniture.id}` // tagId と furnitureId の組み合わせをユニークに識別

        // 重複していなければ、結果に追加
        if (!resultSet.has(key)) {
          resultSet.add(key)
          result.push({ tagId: tag.id, furnitureId: furniture.id })
        }
      }
    })
  })

  return result
}
