import { getCurrentUrl } from '@/utils/pathname'

export function useDomain(): string | undefined {
  const pathname = getCurrentUrl().pathname
  console.log(pathname)
  if (pathname.includes('/teams/')) return 'teams'
  if (pathname.includes('/engineering/')) return 'engineering'
  return 'okrs-guide'
}
