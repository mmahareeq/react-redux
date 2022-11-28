import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: 'Mariam' },
    { id: '2', name: 'bahaa' },
    { id: '3', name: 'abed' },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;
//console.log(usersSlice)
export default usersSlice.reducer


