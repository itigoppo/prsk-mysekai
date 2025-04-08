"use client"
import { tags } from "@/data/furniture"
import {
  addReaction,
  clearReactions,
  getSavedReactions,
  removeReaction,
} from "@/lib/localStorage"
import {
  filterByOneReaction,
  filterByReactionsCount,
  getFilteredFurniture,
} from "@/lib/util"
import { Tag } from "@/types"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import { useDebounce } from "react-use"

const MySekaiContext = createContext<
  | {
      state: {
        savedReactions: Record<string, string[]>
        text: string
        q: string | undefined
        memberIds: string[]
        soloTags: Tag[]
        combinationTags: Tag[]
      }
      dispatch: {
        add: (tagId: string, itemId: string, userId: string) => void
        remove: (tagId: string, itemId: string, userId: string) => void
        clear: () => void
        setText: Dispatch<SetStateAction<string>>
        reset: () => void
        setMemberIds: Dispatch<SetStateAction<string[]>>
      }
    }
  | undefined
>(undefined)

export const MySekaiContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const localStorageKey = "alreadyReacted"

  const [savedReactions, setSavedReactions] = useState<{
    [key: string]: string[]
  }>({})

  useEffect(() => {
    setSavedReactions(getSavedReactions(localStorageKey))
  }, [])

  const add = (tagId: string, itemId: string, userId: string) => {
    addReaction(localStorageKey, tagId, itemId, userId)
    setSavedReactions(getSavedReactions(localStorageKey))
  }

  const remove = (tagId: string, itemId: string, userId: string) => {
    removeReaction(localStorageKey, tagId, itemId, userId)
    setSavedReactions(getSavedReactions(localStorageKey))
  }

  const clear = () => {
    clearReactions(localStorageKey)
    setSavedReactions(getSavedReactions(localStorageKey))
  }

  // 家具リストの検索用
  const [text, setText] = useState<string>("")
  const [q, setQ] = useState<string | undefined>(undefined)
  const [memberIds, setMemberIds] = useState<string[]>([])

  useDebounce(
    () => {
      setQ(text || undefined)
    },
    600,
    [text, setQ],
  )

  const reset = useCallback(() => {
    setText("")
    setQ(undefined)
  }, [setText, setQ])

  const unitTags = getFilteredFurniture(memberIds, tags)
  const soloTags = filterByOneReaction(unitTags, q)
  const combinationTags = filterByReactionsCount(unitTags, q)

  return (
    <MySekaiContext.Provider
      value={{
        state: {
          savedReactions,
          text,
          q,
          memberIds,
          soloTags,
          combinationTags,
        },
        dispatch: {
          add,
          remove,
          clear,
          setText,
          reset,
          setMemberIds,
        },
      }}
    >
      {children}
    </MySekaiContext.Provider>
  )
}

export const useMySekaiContext = () => {
  const context = useContext(MySekaiContext)
  if (context === undefined)
    throw new Error("Function 'useMySekaiContext' must be used in Provider.")
  return context
}
