import React from 'react';
import s from './Post.module.css' 

const Post = (props) => {
    return (
   
    <div className={s.item}>
      <img src='https://kor.ill.in.ua/m/610x385/2473052.jpg'/>
      {props.message}
      <div>
      <span>like</span>{props.likesCount}
      </div>
    </div>
    
    )

}

export default Post;