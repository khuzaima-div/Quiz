import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import './ProfileContainer.css'; 


function ProfileContainer() {
  return (

    <div className='container'>
      <div className='box'>
      <div>
      <ProfileHeader 
        image="https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/492731850_644844771653823_643552717918863108_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGl69QhTk7QaKIy1hWXWeEPa51EchdNKQFrnURyF00pAQ4-9Nd9lGpaI59EAN6-1xQH1MFXXPLRaaRZSO7o8I5m&_nc_ohc=s0IdUTANVvQQ7kNvwHkKfnl&_nc_oc=AdmR0l4SWylCrzMjcAkgH6IQBBtXlDX_ZB1E1sfPlH_boPTp6gi-jn4if76BJ4x-CVs&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=pfBQQqpl95LHEXNI0NIf3A&oh=00_AfdFP8yjDPx5jnz7MclS4FGqlDsJcy9h2jNOJbHN1_ouSA&oe=69024C1B" 
        name="Khuzaima Ramzan" 
      />
      </div>
      <hr></hr>
<div>
      <ProfileStats 
        followers="300" 
        posts="40" 
        likes="10k" 
      />
      </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
