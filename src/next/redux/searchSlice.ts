import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
    isModalOpen: boolean
    query: string
}

const initialState: SearchState = {
    isModalOpen: false,
    query: ``
}

const searchSlice = createSlice({
    name: `search`,
    initialState,
    reducers: {
        openSearchModal(state) {
            state.isModalOpen = true
        },
        closeSearchModal(state) {
            state.isModalOpen = false
            state.query = ``
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.query = action.payload
        },
    },
})

export const {
    openSearchModal,
    closeSearchModal,
    setSearchQuery,
} = searchSlice.actions
export default searchSlice.reducer
