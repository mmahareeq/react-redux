import { selectAllUsers } from "../users/usersSlice";
import { useSelector } from "react-redux";
import React from 'react'

export const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers);

    const author = users.find(user => user.id === userId);
  return (
    <span>{author ? author.name : 'Unknown author'}</span>
  )
}

export default PostAuthor;
