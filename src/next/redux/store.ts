import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice'
import searchReducer from './searchSlice'

const reduxStore = configureStore({
    reducer: {
        nav: sidebarReducer,
        search: searchReducer,
    },
})

export default reduxStore
