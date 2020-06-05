import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return   <div className={s.content}>
    <div>
    <img src='https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/denman20200325-nasa.jpg'/>
 </div >
 <div>
   ava+description
 </div>
 <MyPosts />
  </div>
}

export default Profile;