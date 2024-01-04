import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import orisNftAbi from './orisNftAbi'
import Web3, { Address, ContractAbi } from 'web3';
import { reset } from 'viem/actions';
import { notification } from 'antd';




export const orisNftSlice = createSlice({
    name: 'orisNft',
    initialState: {
        contractInstance: {}
    },
    reducers: {
        initializeOrisNftContract: (state) => {
            console.log("initalizing OrisNFT")
            try {
                // @ts-ignore
                const web3 = new Web3(window.web3.currentProvider);
                const address = "0x932519E6Ec5faCD3B0011b564206A3D0f7dd9B60" as Address;
                const abi: ContractAbi = orisNftAbi.abi;
                let contract = new web3.eth.Contract(abi, address);
                state.contractInstance = contract;
            } catch (err) {
                notification.error({
                    message: "Please install wallet and switch to bnb testnet!"
                })
            }
        },

    },


})


// Action creators are generated for each case reducer function
export const { initializeOrisNftContract, } = orisNftSlice.actions

export default orisNftSlice.reducer