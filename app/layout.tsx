'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/common/antd/lib/AntdRegistry'
import AntdTheme from '@/common/antd/theme/themeConfig'
import { ConfigProvider } from 'antd'
import StoreProvider from '../components/StoreProvider'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <StoreProvider >
          <ConfigProvider theme={AntdTheme}>
            <StyledComponentsRegistry >
              {children}
            </StyledComponentsRegistry>
          </ConfigProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
