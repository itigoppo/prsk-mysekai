"use client"
import { units } from "@/data/members"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { FC } from "react"

type Props = {
  title?: string
}

export const Header: FC<Props> = ({ title }) => {
  const pathname = usePathname()

  return (
    <>
      <header className="mx-auto max-w-7xl px-4 md:max-w-md">
        とうふの森リアクション早見表{" "}
        <span className="text-xs text-slate-500">(v250408)</span>
        {title && <div>{title}</div>}
      </header>
      <nav className="mx-auto max-w-7xl md:max-w-md">
        <ul className="flex space-x-4 border-b border-slate-200 bg-white px-4 py-2 text-sm shadow">
          {units.map((unit) => {
            const isCurrent = pathname.match(unit.url.pathname)
            return (
              <Link key={unit.id} href={unit.url}>
                <li
                  className={clsx(
                    "rounded px-4 py-0.5 hover:bg-slate-600 hover:text-white",
                    isCurrent ? "text-white" : "bg-slate-100 text-slate-700",
                  )}
                  style={{
                    backgroundColor: isCurrent ? unit.color : undefined,
                  }}
                >
                  {unit.short}
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
