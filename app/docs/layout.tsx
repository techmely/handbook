import 'fumadocs-ui/style.css'
import { DocsLayout } from 'fumadocs-ui/layout'
import type { ReactNode } from 'react'
import { docsLayoutOptions } from '../layout.config'
import { HandleScroll } from './HandleScroll'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <DocsLayout {...docsLayoutOptions}>{children}</DocsLayout>
      <HandleScroll />
    </>
  )
}
