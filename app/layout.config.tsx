import { SvgUse } from '@/components/SvgUse'
import { useDomain } from '@/hooks/useDomain'
import { docSource } from '@/modules/docs/source'
import TechmelyLogo from '@/public/icon.png'
import { docsModules } from '@/utils/modules'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle'
import type { BaseLayoutProps, DocsLayoutProps } from 'fumadocs-ui/layout'
import Image from 'next/image'
import Link from 'next/link'

const itemVariants = cva(
  'rounded-md px-2 py-1 transition-colors hover:text-accent-foreground',
  {
    variants: {
      active: {
        true: 'bg-accent text-accent-foreground',
      },
    },
  },
)

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/techmely/handbook',
  nav: {
    transparentMode: 'top',
    title: (
      <div className="flex gap-2 items-center">
        <Image
          alt="Techmely"
          src={TechmelyLogo}
          sizes="30px"
          className="size-7"
          aria-label="Techmely"
        />
        <p className="text-xl font-bold uppercase">Techmely</p>
      </div>
    ),
  },
}

export const docsLayoutOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: docSource.pageTree,
  nav: {
    title: (
      <div className="flex gap-2 items-center">
        <Image
          alt="Techmely"
          src={TechmelyLogo}
          sizes="20px"
          className="size-6"
          aria-label="Techmely"
        />
        <p className="text-lg font-bold uppercase">Techmely</p>
      </div>
    ),
  },
  sidebar: {
    defaultOpenLevel: 0,
    banner: (
      <RootToggle
        options={docsModules.map((m) => ({
          url: `/docs/${m.param}`,
          icon: (
            <SvgUse
              id={m.iconId}
              className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
              style={{
                backgroundColor: `hsl(var(--${m.param}-color)/.3)`,
                color: `hsl(var(--${m.param}-color))`,
              }}
            />
          ),
          title: m.name,
          description: m.description,
        }))}
      />
    ),
  },
}
