'use client'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { initializeOrisNftContract } from "@/store/mintnft/orisNftSlice";
import { setWalletAddress } from "@/store/wallet/walletSlice";
import { Button, Dropdown, MenuProps, message } from "antd";
import { useEffect, useState } from "react";
import Web3, { Address, ContractAbi } from 'web3';

/* To connect using MetaMask */




export default function WalletConnectBtn() {
    const _walletAddress = useAppSelector(state => state.wallet.address);
    const _dispatch = useAppDispatch();
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
                console.log('Connected with MetaMask account: ' + accounts[1]);
                _dispatch(setWalletAddress(accounts));
                _dispatch(initializeOrisNftContract());
            });
            console.log('wallet has connected');


        } else {
            console.log("No wallet");
        }
    }


    useEffect(() => {
    }, []);
    return <>
        {/* <Dropdown menu={{ items: walletItems, onClick: onClickWallet }} trigger={['click']} placement="bottom" arrow>
            <Button type="primary">
                Connect to wallet
            </Button>
        </Dropdown> */}
        {
            _walletAddress == '' ?
                <Button type="primary" onClick={connect}>
                    Connect wallet
                </Button>
                : <p className="text-white">
                    {_walletAddress}
                </p>
        }

    </>
}