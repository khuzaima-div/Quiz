import React from 'react';
import './ProfileContainer.css'; 


function ProfileStats(props) {
  return (
    <div>
      <p>Followers: {props.followers}</p>
      <p>Posts: {props.posts}</p>
      <p>Likes: {props.likes}</p>
    </div>
  );
}

export default ProfileStats;
