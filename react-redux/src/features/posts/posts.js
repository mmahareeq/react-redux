import {useSelector, useDispatch} from 'react-redux';
import { selectAllPost, getPostsStatus, getPostsError, fetchPosts } from './postsSlice';
import {React, useEffect} from 'react';
import PostAuthor from './PostAuthor';

export const Posts = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPost);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(()=>{
      if(postsStatus == 'idel')
         dispatch(fetchPosts());
        
    }, [postsStatus, dispatch]);

    let content; 

    if(postsStatus == 'loading')
       content = <p> loading ....</p>
    else if(postsStatus == 'succeeded')
      {
      content =  posts.map(post =>(
          <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}</p>
              <PostAuthor userId={post.userId} />
          </article>
      ))
      }else if (postsStatus === 'failed') {
        content = <p>{error}</p>;
    }

    // const renderPosts = posts.map(post =>(
    //     <article key={post.id}>
    //         <h3>{post.title}</h3>
    //         <p>{post.content.substring(0, 100)}</p>
    //         <PostAuthor userId={post.userId} />
    //     </article>
    // ));

  return (
    <section>
       <h2>posts</h2>
       {content}
    </section>
   
  )
}
