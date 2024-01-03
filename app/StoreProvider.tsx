'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../store/store'
import { initializeCounter } from '@/store/counter/counterSlice'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
        
        const count: any = 1;
        storeRef.current.dispatch(initializeCounter(count));

        console.log("creating store");

    }

    return <Provider store={storeRef.current}>{children}</Provider>
}