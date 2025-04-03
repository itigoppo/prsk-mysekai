const buildSuffix = (url?: {
  query?: Record<
    string,
    string | number | boolean | Array<string | number | boolean>
  >
  hash?: string
}) => {
  const query = url?.query
  const hash = url?.hash
  if (!query && !hash) return ""
  const search = (() => {
    if (!query) return ""

    const params = new URLSearchParams()

    Object.entries(query).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, String(item)))
      } else {
        params.set(key, String(value))
      }
    })

    return `?${params.toString()}`
  })()
  return `${search}${hash ? `#${hash}` : ""}`
}

export const pagesPath = {
  leoneed: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/leoneed" as const,
      hash: url?.hash,
      path: `/leoneed${buildSuffix(url)}`,
    }),
  },
  mmj: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/mmj" as const,
      hash: url?.hash,
      path: `/mmj${buildSuffix(url)}`,
    }),
  },
  oclock: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/oclock" as const,
      hash: url?.hash,
      path: `/oclock${buildSuffix(url)}`,
    }),
  },
  vbs: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/vbs" as const,
      hash: url?.hash,
      path: `/vbs${buildSuffix(url)}`,
    }),
  },
  vs: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/vs" as const,
      hash: url?.hash,
      path: `/vs${buildSuffix(url)}`,
    }),
  },
  ws: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/ws" as const,
      hash: url?.hash,
      path: `/ws${buildSuffix(url)}`,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: "/" as const,
    hash: url?.hash,
    path: `/${buildSuffix(url)}`,
  }),
}

export type PagesPath = typeof pagesPath
