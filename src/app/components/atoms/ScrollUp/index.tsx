"use client"
import { KeyboardArrowUp } from "@mui/icons-material"
import clsx from "clsx"
import { useEffect, useState } from "react"

import { animateScroll as scroll } from "react-scroll"

export function ScrollUp() {
  // スクロールアップボタンを表示、非表示させるためのState
  const [isVisible, setIsVisible] = useState(false)

  // スクロールしている高さを取得して、stateの値を更新する処理
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        // ここで表示するスクロール位置を調整
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <button
        className={clsx(
          "fixed right-6 bottom-6 z-50 cursor-pointer rounded-full bg-gray-500 p-3 text-white transition-opacity",
          isVisible ? "opacity-100" : "opacity-0",
        )}
        onClick={scrollToTop}
      >
        <KeyboardArrowUp />
      </button>
    </div>
  )
}
