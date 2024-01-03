import React from 'react';
import type { MenuProps } from 'antd';
import { Menu, Space } from 'antd';
import Link from 'next/link';
import WalletConnectBtn from './WalletConnectBtn';

const navbarMenuItems: MenuProps['items'] = [
    {
        label: <Link href="/nft">
            NFT Store
        </Link>,
        key: 'nft',
    },
    {
        label: <Link href="/swap">
            Crypto Swap
        </Link>,
        key: 'swap',
    },
    {
        label: <Link href="/paymnent">
            Payment
        </Link>,
        key: 'paymnent',
    },
    {
        label: <Link href="counter">
            Guide
        </Link>,
        key: 'payssmnent',
    },

];


export default function TheHeader() {

    return <>
        <header className='w-full'>
            <Space className='w-full justify-center font-[600] text-xl' size={100}>
                <Menu style={{ width: '100%', padding: '10px' }} mode="horizontal" items={navbarMenuItems} />
                <WalletConnectBtn />
            </Space>
        </header>
    </>
}