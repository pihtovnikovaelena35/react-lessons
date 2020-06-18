import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return  (
     <div>
    <div>
    <img src='https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/denman20200325-nasa.jpg'/>
 </div >
 <div className={s.descriptionBlock}>
   ava+description
 </div>
  </div>
    )
}

export default ProfileInfo;