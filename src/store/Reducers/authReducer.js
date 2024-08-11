import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: '',
        userInfo: ''
    },
    reducers: {},
    extraReducers: {},
});

export default authReducer.reducer;