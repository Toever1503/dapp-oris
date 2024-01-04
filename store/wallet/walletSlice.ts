import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        address: '',
    },
    reducers: {
        initializeCounter: (state, action: any) => {
        },
        setWalletAddress: (state, action) => {
            state.address = action.payload
        }

    },
})


// Action creators are generated for each case reducer function
export const { initializeCounter, setWalletAddress } = walletSlice.actions

export default walletSlice.reducer