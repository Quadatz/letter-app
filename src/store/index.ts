import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(thunk)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch