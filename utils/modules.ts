export interface DocsModule {
  param: string
  name: string
  description: string
  iconId: string
}

export const docsModules: DocsModule[] = [
  {
    name: 'OKRs Guide',
    param: 'okrs-guide',
    description: 'How we do OKRs',
    iconId: 'okrs-guide',
  },
  {
    name: 'Nuôi Con EASY',
    param: 'nuoi-con-easy',
    description: 'Phương pháp nuôi con khoa học - Mẹ nhàn, con ngoan',
    iconId: 'teams',
  },
  {
    name: 'About Us',
    param: 'teams',
    description: 'Overview our teams',
    iconId: 'teams',
  },
]
