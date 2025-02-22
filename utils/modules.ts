export interface DocsModule {
  param: string
  name: string
  description: string
  iconId: string
}

export const docsModules: DocsModule[] = [
  {
    name: 'Teams',
    param: 'teams',
    description: 'Overview our teams',
    iconId: 'teams',
  },
  {
    name: 'OKRs Guide',
    param: 'okrs-guide',
    description: 'How we do OKRs',
    iconId: 'okrs-guide',
  },
  {
    name: 'Engineering',
    param: 'engineering',
    description: 'How we do science',
    iconId: 'engineering',
  },
]
