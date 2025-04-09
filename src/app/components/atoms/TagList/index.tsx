import { Expander } from "@/app/components/atoms/Expander"
import { Member } from "@/types"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Stack, TextField } from "@mui/material"
import { ChangeEvent, FC, useEffect } from "react"
import { Element } from "react-scroll"
import { useMySekaiContext } from "../../context"
import { FurnitureList } from "../FurnitureList"

type Props = {
  members: Member[]
}

export const TagList: FC<Props> = ({ members }) => {
  const { dispatch, state } = useMySekaiContext()

  // useEffectの第二引数にdispatchを入れると、無限ループになる
  useEffect(() => {
    dispatch.setMemberIds(members.map((member) => member.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [members, dispatch.setMemberIds])

  return (
    <>
      <div className="space-y-4 px-4 text-sm">
        <div>
          <TextField
            label="家具名"
            variant="outlined"
            type="text"
            value={state.text}
            size="small"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch.setText(e.currentTarget.value)
            }}
          />
        </div>

        <div
          onClick={() => {
            dispatch.setExcludeChecked((state) => !state)
          }}
          className="flex-1 hover:cursor-pointer"
        >
          <Stack alignItems="center" direction="row" gap={1}>
            {state.excludeChecked ? (
              <CheckBoxOutlined className="text-teal-600" />
            ) : (
              <CheckBoxOutlineBlank />
            )}
            <div>全員のリアクション閲覧済みは除外</div>
          </Stack>
        </div>

        {state.soloTags.length === 0 && state.combinationTags.length === 0 && (
          <div className="flex min-h-[400px] w-full items-center justify-center bg-white text-sm text-slate-400">
            データがありません...
          </div>
        )}

        {state.soloTags.map(({ name: tagName, id: tagId, furnitureList }) => (
          <Element name={tagId} key={tagId}>
            <Expander
              toggleButtonText={tagName}
              className="bg-emerald-50"
              isDefaultClose={true}
              isOpen={state.q !== undefined}
            >
              <FurnitureList
                tagId={tagId}
                tags={state.soloTags}
                furnitureList={furnitureList}
                members={members}
              />
            </Expander>
          </Element>
        ))}
        {state.combinationTags.length > 0 && (
          <Element name="combination">
            <Expander
              toggleButtonText={"2人以上で反応する家具"}
              className="bg-emerald-50"
              isDefaultClose={true}
              isOpen={state.q !== undefined}
            >
              {state.combinationTags.map(({ id: tagId, furnitureList }) => {
                return (
                  <FurnitureList
                    key={tagId}
                    tags={state.combinationTags}
                    tagId={tagId}
                    furnitureList={furnitureList}
                    members={members}
                  />
                )
              })}
            </Expander>
          </Element>
        )}
      </div>
    </>
  )
}
