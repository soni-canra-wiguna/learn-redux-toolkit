"use client"

import { Provider } from "react-redux"
import { store } from "./store"

interface ReduxProviderType {
  children: React.ReactNode
}

const ReduxProvider = ({ children }: ReduxProviderType) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
