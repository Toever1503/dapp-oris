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
        initializeOrisNftContract: (state, action) => {
            console.log("initalizing OrisNFT")
            try {
                // @ts-ignore
                // const web3 = new Web3(window.web3.currentProvider);
                const address = "0xB09FB5ADA5A49C3A118Ae3041832feC67d93A50A" as Address;
                const abi: ContractAbi = orisNftAbi.abi;
                let contract = new action.payload.eth.Contract(abi, address);
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