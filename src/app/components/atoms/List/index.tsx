import { Expander } from "@/app/components/atoms/Expander"
import { useMySekaiContext } from "@/app/components/context"
import { Member, Tag } from "@/types"
import { Stars } from "@mui/icons-material"
import { Stack } from "@mui/material"
import clsx from "clsx"
import { FC } from "react"

type Props = {
  tags: Tag[]
  members: Member[]
}

export const List: FC<Props> = ({ tags, members }) => {
  const { dispatch, state } = useMySekaiContext()

  return (
    <>
      <div className="space-y-4 px-4 text-sm">
        {tags.map(({ name: tagName, id: tagId, furnitureList }) => (
          <Expander
            key={tagId}
            toggleButtonText={tagName}
            className="bg-emerald-50"
            isDefaultClose={true}
          >
            {furnitureList.map(({ id: itemId, name: itemName, reactions }) => {
              return (
                <div key={itemId} className="space-y-2">
                  <div className="border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
                    {itemName}
                  </div>
                  <div className={clsx("grid grid-cols-3 gap-4")}>
                    {reactions.map((reactionMemberIds, index) => {
                      const saveValue = reactionMemberIds.join("_")

                      const reactionMembers: Member[] = members.filter(
                        (member) => {
                          return reactionMemberIds.includes(member.id)
                        },
                      )

                      const checked =
                        state.savedReactions[`${tagId}_${itemId}`]?.includes(
                          saveValue,
                        )

                      return (
                        <div key={index}>
                          <Stack alignItems="center" direction="row" gap={0.5}>
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
                              }}
                            >
                              {reactionMembers.map((member) => (
                                <span
                                  key={member.id}
                                  className={clsx(
                                    "flex items-center gap-1 text-xs",
                                  )}
                                >
                                  <div
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                      backgroundColor: member.color,
                                    }}
                                  />
                                  {member.firstName}
                                </span>
                              ))}
                            </div>
                            {checked && (
                              <Stars
                                fontSize="small"
                                className="text-lime-500"
                              />
                            )}
                          </Stack>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Expander>
        ))}
      </div>
    </>
  )
}
