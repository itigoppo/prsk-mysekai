export const getSavedReactions = (localStorageKey: string) => {
  const savedReactions = localStorage.getItem(localStorageKey)
  if (savedReactions) {
    return JSON.parse(savedReactions)
  }
  return {}
}

export const addReaction = (
  localStorageKey: string,
  tagId: string,
  itemId: string,
  userId: string,
) => {
  const savedReactions = getSavedReactions(localStorageKey)
  const reactionKey = `${tagId}_${itemId}`
  if (savedReactions[reactionKey]) {
    savedReactions[reactionKey].push(userId)
  } else {
    savedReactions[reactionKey] = [userId]
  }
  localStorage.setItem(localStorageKey, JSON.stringify(savedReactions))
}

export const removeReaction = (
  localStorageKey: string,
  tagId: string,
  itemId: string,
  userId: string,
) => {
  const savedReactions = getSavedReactions(localStorageKey)
  const reactionKey = `${tagId}_${itemId}`
  if (savedReactions[reactionKey]) {
    savedReactions[reactionKey] = savedReactions[reactionKey].filter(
      (id: string) => id !== userId,
    )
    if (savedReactions[reactionKey].length === 0) {
      delete savedReactions[reactionKey]
    }
  }
  localStorage.setItem(localStorageKey, JSON.stringify(savedReactions))
}

export const clearReactions = (localStorageKey: string) => {
  localStorage.removeItem(localStorageKey)
}
