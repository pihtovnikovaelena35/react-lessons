import React from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className='app-wrapper'>
    <Header />
  <nav className='nav'>
    <div>
    <div>
      <a>Profile</a>
      </div>
      <a>Messages</a>
      </div>
      <div>
      <a>News</a>
      <div>
      <a>Music</a>
      </div>
      <div>
      <a>Settings</a>
      </div>
      
      </div>
  </nav>
  <div className='content'>
    <div>
    <img src='https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/denman20200325-nasa.jpg'/>
 </div >
 <div>
   ava+description
 </div>
 <div>
   My posts
   <div>
     New post
   </div>
   <div>
   <div>
     post1
   </div>
   <div>
     post2
   </div>
   </div>
 </div>
  </div>
</div>
);
}


export default App;
