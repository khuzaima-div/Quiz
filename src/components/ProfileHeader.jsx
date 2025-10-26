import React from 'react';
import './ProfileContainer.css'; 


function ProfileHeader(props) {
  return (
    <div>
      <img src={props.image} alt="Profile" width="250" />
      <h2>{props.name}</h2>
    </div>
  );
}

export default ProfileHeader;
