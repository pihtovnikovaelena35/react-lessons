import React from 'react';
import s from './MyPosts.module.css' 
import Post from './Post/Post';

const MyPosts = (props) => {

 

  let postsElemements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />);

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