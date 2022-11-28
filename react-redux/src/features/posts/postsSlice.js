import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const  initialState = {
    posts: [],
    status: 'idel', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const response = await axios.get(POSTS_URL);
    return response.data;
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action)=>{
                state.posts.push(action.payload)
            },
            prepare: (title, body, userId) =>{
                const id = nanoid();
                return {payload: 
                    {id ,title, body, userId}
                }
            },
        }
    },
    extraReducers(builder){
        builder
          .addCase(fetchPosts.pending, (state, action) =>{
            state.status ='loading'
          })
          .addCase(fetchPosts.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.posts = state.posts.concat(action.payload);
          })
          .addCase(fetchPosts.rejected, (state, action)=> {
            state.status = 'failed'
            state.error = action.error.message
          })
    }
});

export const selectAllPost = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

console.log('reducer', postSlice);

export const {postAdded } = postSlice.actions;

export default postSlice.reducer;