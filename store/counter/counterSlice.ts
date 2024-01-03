import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchCounterData = createAsyncThunk(
    'counter/fetchData',
    async (userId, thunkAPI) => {
        const res = await fetch('https://api.github.com/repos/vercel/next.js')
        const repo: any = await res.text()
        return repo
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        data: []
    },
    reducers: {
        initializeCounter: (state, action: any) => {
            state.value = action.payload;
        },
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;

            console.log("incresing");

        },
        decrement: state => {
            state.value -= 1
            console.log("decresing");
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCounterData.fulfilled, (state, action: any) => {
            // Add user to the state array
            state.data = action.payload;
        })
    }
})


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, initializeCounter } = counterSlice.actions

export default counterSlice.reducer