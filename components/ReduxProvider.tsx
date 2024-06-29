"use client"
import { store } from "@/redux"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react'


export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {

    let persistor = persistStore(store)

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

                {children}
            </PersistGate>
        </Provider>
    )
}

