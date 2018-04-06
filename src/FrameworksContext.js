import { createContext } from 'react'

const FrameworkContext = createContext({})

export const FrameworkProvider = FrameworkContext.Provider

export const FrameworkConsumer = FrameworkContext.Consumer
