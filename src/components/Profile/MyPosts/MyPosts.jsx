import React from 'react';
import s from './MyPosts.module.css' 
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount:12 },
    {id: 2, message: 'It is my first post', likesCount:125 }
  ]

  let postsElemements = posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
    <div className={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
      <textarea></textarea>
      </div>
      <div>
      <button>add post</button>
      </div>
    </div> 
    <div className={s.posts}>
   {postsElemements}
    </div>
  </div>
    )

}

export default MyPosts;