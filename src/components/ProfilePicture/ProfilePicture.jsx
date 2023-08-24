import { useState } from 'react'
import "./ProfilePicture.css"

const ProfilePicture = () => {

    const [profileImage,setProfileImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/120px-Default_pfp.svg.png")

    const handleClick = () => {
        setProfileImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/OOjs_UI_icon_userAvatar-progressive.svg/1200px-OOjs_UI_icon_userAvatar-progressive.svg.png")
    } 
  return (
    <div>
    {profileImage ? <img className='profile-image' onClick={handleClick} src={profileImage} alt='avatar'/> : <p>loading..</p>}
    </div>
  )
}

export default ProfilePicture