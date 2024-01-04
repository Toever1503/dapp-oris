'use client'
import { Button, Dropdown, MenuProps, message } from "antd";
import { useEffect, useState } from "react";
import { Web3 } from 'web3';

/* To connect using MetaMask */




export default function WalletConnectBtn() {
    const [walletPopupTrigger, updateWalletPopupTrigger] = useState(['hover']);
    const walletItems: MenuProps['items'] = [
        {
            key: 'metamask',
            label: 'Metamask wallet',
        },
        {
            key: 'trust',
            label: 'Trust wallet',
        },
        {
            key: 'coibase',
            label: 'Coinbase wallet',
        },
    ];
    const onClickWallet: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
        connect();
        switch (key) {
            case 'metamask':
                break;
            case 'trust':
                break;
            case 'coinbase':
                break;
            default:
                break;
        }
    };

    async function connect() {
        // @ts-ignore
        if (window.ethereum) {
            // @ts-ignore
            await window.ethereum.request({ method: "eth_requestAccounts" });
            // @ts-ignore
            const wweb3 = new Web3(window.ethereum);
            // @ts-ignore
            window.ethereum.enable();

            // Get the user's accounts
            wweb3.eth.getAccounts().then(function (accounts) {
                // Show the first account
                console.log('Connected with MetaMask account: ' + accounts);
            });
            console.log('wallet has connected');

        } else {
            console.log("No wallet");
        }
    }
    const [walletAddress, setWalletAddress] = useState<string>('');


    useEffect(() => {
        // if (window.screen.width < 1200)
        // updateWalletPopupTrigger(['click'])
        // @ts-ignore
        if (ethereum.address)
            // @ts-ignore
            setWalletAddress(ethereum.address);
    }, []);
    return <>
        {/* <Dropdown menu={{ items: walletItems, onClick: onClickWallet }} trigger={['click']} placement="bottom" arrow>
            <Button type="primary">
                Connect to wallet
            </Button>
        </Dropdown> */}
        {
            walletAddress == '' ?
                <Button type="primary" onClick={connect}>
                    Connect wallet
                </Button>
                : <p className="text-white">
                    {walletAddress}
                </p>
        }

    </>
}