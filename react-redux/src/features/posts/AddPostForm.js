import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { postAdded } from './postsSlice'
import React from 'react'


export const AddPostForm = () => {
    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);
    console.log(users)
    const [title, setTitle] = useState('');
    const [body, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const onTitleChanged = e=>
    {    console.log(e)
        setTitle(e.target.value)};
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const canSave = Boolean(title) && Boolean(body) && Boolean(userId)
     
    const onSavePostClicked = () =>{
        if( title && body){
            dispatch(postAdded(title, body, userId));
            
            setContent('');
            setTitle('');
        }

    }

    const usersOptions = users.map( user =>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={body}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
  )
}

