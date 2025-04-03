export type Member = {
  color: string
  firstName: string
  id: string
  lastName: string | null
}

export type Unit = {
  color: string
  id: string
  members: Member[]
  name: string
  pathname: string
  short: string
  url: UrlType
}

type UrlType = {
  pathname: string
  query?: Record<string, string | string[]>
  hash?: string
}

export type Tag = {
  id: string
  furnitureList: Furniture[]
  name: string
}

export type Furniture = {
  id: string
  name: string
  reactions: string[][]
}
