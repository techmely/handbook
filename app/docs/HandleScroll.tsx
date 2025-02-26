'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function HandleScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const element = document.querySelector('.flex.min-w-0.flex-1.flex-col')
    if (element && pathname.includes('/docs')) {
      element.setAttribute('style', 'overflow-y: scroll; max-height: 100vh;')
    }
  }, [pathname])
  return null
}
