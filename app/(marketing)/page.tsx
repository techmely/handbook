import { appConfig } from '@/app.config'
import { TargetIcon, UsersIcon, BabyIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: appConfig.url,
  },
}

export default function HomePage() {
  return (
    <main className="flex flex-row gap-6 items-center px-4 mx-auto size-full max-w-container">
      <div className="flex flex-col gap-6 py-8 mx-auto w-full">
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden relative p-4 rounded-lg border bg-background/50">
            <div className="relative z-10">
              <div className="flex gap-2 items-center mb-4">
                <TargetIcon
                  className="p-1 bg-gradient-to-t rounded-md size-6 shrink-0 from-background/80"
                  style={{
                    backgroundColor: 'hsl(var(--okrs-guide-color)/.3)',
                    color: 'hsl(var(--okrs-guide-color))',
                  }}
                />
                <h2 className="text-lg font-medium">Hướng dẫn OKRs</h2>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Hướng dẫn toàn diện để hiểu và triển khai OKRs hiệu quả trong tổ
                chức của bạn. Từ cơ bản đến nâng cao, giúp doanh nghiệp đạt mục
                tiêu chiến lược
              </p>
              <Link
                href="/docs/okrs-guide"
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
              >
                Tìm hiểu thêm
              </Link>
            </div>
          </div>

          <div className="overflow-hidden relative p-4 rounded-lg border bg-background/50">
            <div className="relative z-10">
              <div className="flex gap-2 items-center mb-4">
                <BabyIcon
                  className="p-1 bg-gradient-to-t rounded-md size-6 shrink-0 from-background/80"
                  style={{
                    backgroundColor: 'hsl(340 82% 52% / 0.3)',
                    color: 'hsl(340 82% 52%)',
                  }}
                />
                <h2 className="text-lg font-medium">Nuôi Con EASY</h2>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Phương pháp nuôi con khoa học - Mẹ nhàn, con ngoan. Hướng dẫn
                chi tiết về EASY, ăn ngủ tự lập và kỷ luật tích cực
              </p>
              <Link
                href="/docs/nuoi-con-easy"
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
              >
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
