import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import walletSlice from './wallet/walletSlice'
import orisNftSlice from './mintnft/orisNftSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterSlice,
            wallet: walletSlice,
            orisNft: orisNftSlice
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

