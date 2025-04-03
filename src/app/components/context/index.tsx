"use client"
import {
  addReaction,
  clearReactions,
  getSavedReactions,
  removeReaction,
} from "@/lib/localStorage"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

const MySekaiContext = createContext<
  | {
      state: {
        savedReactions: Record<string, string[]>
      }
      dispatch: {
        add: (tagId: string, itemId: string, userId: string) => void
        remove: (tagId: string, itemId: string, userId: string) => void
        clear: () => void
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

  return (
    <MySekaiContext.Provider
      value={{
        state: {
          savedReactions,
        },
        dispatch: {
          add,
          remove,
          clear,
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
