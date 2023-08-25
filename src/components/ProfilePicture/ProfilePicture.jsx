import { useState } from 'react'
import "./ProfilePicture.css"

const ProfilePicture = () => {

    const [profileImage,setProfileImage] = useState("/src/assets/images/profile-picture.svg")

    const handleClick = () => {
        setProfileImage("/src/assets/images/profile-picture.svg")
    } 
  return (
    <div>
    {profileImage ? <img className='profile-image' onClick={handleClick} src={profileImage} alt='avatar'/> : <p>loading..</p>}
    </div>
  )
}

export default ProfilePicture