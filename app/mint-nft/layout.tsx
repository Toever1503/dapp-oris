'use client'
import { Layout, Space, Button } from 'antd';
import Link from 'next/link';

export default function mintNftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="bg-[#001529] w-full h-full text-white" >
        <Layout.Header className="sticky top-0 left-0">
          <Space className="justify-between items-between w-full">
            <Link href="/" className='text-white text-xl'>Orisu</Link>
            <Space >
              <Button type="primary">
                Connect wallet
              </Button>
            </Space>
          </Space>
        </Layout.Header>

        <div className="h-full !min-h-[unset] !max-h-[unset] py-[15px] bg-[#001529]">
          {children}
        </div>
      </div>
    </>
  )
}
