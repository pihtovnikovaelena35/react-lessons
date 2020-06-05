import React from 'react';
import s from './MyPosts.module.css' 

const MyPosts = () => {
    return (
    <div>
    My posts
    <div>
      <textarea></textarea>
      <button>add</button>
    </div> 
    <div className={s.posts}>
    <div className={s.item}>
      <img src='https://kor.ill.in.ua/m/610x385/2473052.jpg'/>
      post1
    </div>
    <div>
      post2
    </div>
    </div>
  </div>
    )

}

export default MyPosts;