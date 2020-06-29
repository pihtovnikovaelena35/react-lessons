import React from 'react';
import s from './MyPosts.module.css' 
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElemements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text= newPostElement.current.value;
    alert(text);
  }

    return (
    <div className={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
      <textarea ref={newPostElement}></textarea>
      </div>
      <div>
      <button onClick= {addPost}>add post</button>
      </div>
    </div> 
    <div className={s.posts}>
   {postsElemements}
    </div>
  </div>
    )

}

export default MyPosts;