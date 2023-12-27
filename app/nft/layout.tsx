import { Menu, MenuProps, Space } from "antd"
import Link from "next/link";

const navbarMenuItems: MenuProps['items'] = [
  {
    label: <Link href="/nft">
      Store
    </Link>,
    key: 'nft',
  },
  {
    label: <Link href="/nft/admin">
      Admin
    </Link>,
    key: 'nft_admin',
  },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Space className='w-full justify-center font-[600] text-xl' size={100}>
        <Menu style={{ width: '100%', padding: '10px' }} mode="horizontal" items={navbarMenuItems} />
      </Space>
      <div>
        {children}
      </div>
    </>
  )
}
