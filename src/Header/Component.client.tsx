'use client'
import Link from 'next/link'

import type { Header } from '@/payload-types'
import { cn } from '@/utilities/cn'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/Icons'
import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'
import { HeaderNav } from './Nav'
import { Logo } from '@/components/Logo/Logo'

export const HeaderClient = ({ header }: { header: Header }) => {
  const navItems = header?.navItems || []
  const { address, phone } = header

  return (
    <header className="sticky top-0 z-40 flex w-full bg-background/50 backdrop-blur-sm py-8">
      <div className="flex items-center w-full px-4 md:px-8 2xl:px-0 2xl:container">
        <Logo />
        <MainNav navItems={navItems} />
        <MobileNav navItems={navItems} />
      </div>
    </header>
  )
}
