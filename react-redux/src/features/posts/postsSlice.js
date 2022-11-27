import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id:'1',
        title: 'Learning Redux Toolkit',
        content: 'I have heared good things.'
    },
    {
        id: '2',
        title: 'Learning React Hooks!',
        content: 'I have heared good things.'
    }
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action)=>{
            state.push(action.payload)
        }
    },
});

export const selectAllPost = (state) => state.posts;

export const {postAdded } = postSlice.actions;

export default postSlice.reducer;