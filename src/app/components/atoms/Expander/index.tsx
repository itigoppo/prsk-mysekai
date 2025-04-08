"use client"
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import clsx from "clsx"
import { FC, ReactNode, useEffect, useState } from "react"

type Props = {
  toggleButtonText: ReactNode
  children: ReactNode
  isDefaultClose?: boolean
  isOpen?: boolean
  className?: string
}

export const Expander: FC<Props> = ({
  toggleButtonText,
  children,
  isDefaultClose,
  isOpen,
  className,
}) => {
  const [expanded, setExpanded] = useState<boolean>(
    isDefaultClose ? false : true,
  )

  const onClickToggleButton = () => {
    setExpanded((state) => !state)
  }

  useEffect(() => {
    if (isOpen !== undefined) {
      setExpanded(isOpen)
    }
  }, [isOpen])

  return (
    <>
      <div className={clsx("border-b-2 border-slate-500 p-2", className)}>
        <button
          type="button"
          onClick={onClickToggleButton}
          className="grid w-full grid-cols-[1fr_auto] items-center px-4 py-2 text-left text-slate-700"
        >
          <span className="text-sm leading-normal font-bold">
            {toggleButtonText}
          </span>
          <span className="grid size-4 place-content-center text-sky-700">
            {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </span>
        </button>
      </div>

      {expanded && <div className="space-y-6 py-6">{children}</div>}
    </>
  )
}
