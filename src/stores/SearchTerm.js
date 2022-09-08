import { createSlice } from "@reduxjs/toolkit";

export const SearchTerm = createSlice({
    name: 'searchTerm',
    initialState: {
        term: ''
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.term = action.payload;
        }
    }
});

export const { setSearchTerm } = SearchTerm.actions;

export default SearchTerm.reducer;