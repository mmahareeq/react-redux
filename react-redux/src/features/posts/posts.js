import {useSelector} from 'react-redux';
import { selectAllPost } from './postsSlice';
import React from 'react';
import PostAuthor from './PostAuthor';

export const Posts = () => {
    const posts = useSelector(selectAllPost);

    const renderPosts = posts.map(post =>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <PostAuthor userId={post.userId} />
        </article>
    ));

  return (
    <section>
       <h2>posts</h2>
       {renderPosts}
    </section>
   
  )
}
