import { useMySekaiContext } from "@/app/components/context"
import { findTagAndFurnitureByItemNames } from "@/lib/util"
import { Furniture, Member, Tag } from "@/types"
import { RadioButtonUnchecked, Stars, TaskAlt } from "@mui/icons-material"
import { Stack } from "@mui/material"
import clsx from "clsx"
import { FC } from "react"

type Props = {
  tagId: string
  tags: Tag[]
  furnitureList: Furniture[]
  members: Member[]
}

export const FurnitureList: FC<Props> = ({
  tagId,
  tags,
  furnitureList,
  members,
}) => {
  const { dispatch, state } = useMySekaiContext()

  return (
    <>
      {furnitureList.map(({ id: itemId, name: itemName, reactions }) => {
        const totalCount = reactions.length
        let checkedCount = 0

        reactions.map((reaction) => {
          const saveValue = reaction.memberIds.join("_")
          const checked =
            state.savedReactions[`${tagId}_${itemId}`]?.includes(saveValue)
          if (checked) {
            checkedCount++
          }
        })

        const isComplete = checkedCount === totalCount

        return (
          <div key={itemId} className="space-y-2">
            <div className="border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
              <Stack alignItems="center" direction="row" gap={0.5}>
                {isComplete && (
                  <Stars className="text-lime-500" fontSize="small" />
                )}
                <div>{itemName}</div>
                <div>
                  ({checkedCount} / {totalCount})
                </div>
              </Stack>
            </div>
            <div className={clsx("grid grid-cols-3 gap-4")}>
              {reactions.map((reaction, index) => {
                const saveValue = reaction.memberIds.join("_")

                const reactionMembers: Member[] = members.filter((member) => {
                  return reaction.memberIds.includes(member.id)
                })

                const checked =
                  state.savedReactions[`${tagId}_${itemId}`]?.includes(
                    saveValue,
                  )

                return (
                  <Stack
                    alignItems="center"
                    direction="row"
                    gap={0.5}
                    key={index}
                  >
                    <div
                      className={clsx(
                        "gap-2 rounded border border-slate-400 p-1 hover:cursor-pointer",
                        reactionMembers.length > 2
                          ? "grid grid-cols-2"
                          : "flex items-center",
                      )}
                      onClick={() => {
                        if (checked) {
                          dispatch.remove(tagId, itemId, saveValue)
                        } else {
                          dispatch.add(tagId, itemId, saveValue)
                        }

                        // 同じリアクションを持つタグがある場合、そちらも更新する
                        if (
                          reaction.withItemNames &&
                          reaction.withItemNames.length > 0
                        ) {
                          findTagAndFurnitureByItemNames(
                            tags,
                            reaction.withItemNames.filter(
                              (withItemName) => itemName !== withItemName,
                            ),
                          ).map((withItem) => {
                            if (checked) {
                              dispatch.remove(
                                withItem.tagId,
                                withItem.furnitureId,
                                saveValue,
                              )
                            } else {
                              dispatch.add(
                                withItem.tagId,
                                withItem.furnitureId,
                                saveValue,
                              )
                            }
                          })
                        }
                      }}
                    >
                      {reactionMembers.map((member) => (
                        <Stack
                          alignItems="center"
                          direction="row"
                          gap={0.5}
                          key={member.id}
                          className="text-xs"
                        >
                          {checked ? (
                            <TaskAlt
                              sx={{ fontSize: 12, color: member.color }}
                            />
                          ) : (
                            <RadioButtonUnchecked
                              sx={{
                                fontSize: 12,
                                color: member.color,
                              }}
                            />
                          )}
                          <div>{member.firstName}</div>
                        </Stack>
                      ))}
                    </div>
                  </Stack>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
