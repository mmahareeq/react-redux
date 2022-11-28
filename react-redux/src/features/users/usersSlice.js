import { createSlice, nanoid } from "@reduxjs/toolkit";

const initalState = [
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

export default usersSlice.reducer