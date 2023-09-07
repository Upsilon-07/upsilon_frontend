import "./ProfilePicture.css";
import Avatar from "/src/assets/images/profilePicture/woman-avatar.svg";
import { PropTypes } from 'prop-types';

const ProfilePicture = ({ image }) => {
 

  
  return (
    <div className="profile-picture-container-image">
      {image ? (
        <img
          className="profile-image"
          src={image}
          alt="user-picture"
        />
      ) : (
        <img
          className="profile-image"
          src={Avatar}
          alt="user-avatar"
        />
      )}
    </div>
  );
};

ProfilePicture.propTypes = {
  image: PropTypes.string,
};

export default ProfilePicture;
