import { createSlice, nanoid } from '@reduxjs/toolkit';

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
        postAdded: {
            reducer: (state, action)=>{
                state.push(action.payload)
            },
            prepare: (title, content, userId) =>{
                const id = nanoid();
                return {payload: 
                    {id ,title, content, userId}
                }
            },
        }
    },
});

export const selectAllPost = (state) => state.posts;

export const {postAdded } = postSlice.actions;

export default postSlice.reducer;