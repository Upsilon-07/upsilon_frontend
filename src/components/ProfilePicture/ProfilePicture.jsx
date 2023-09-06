import "./ProfilePicture.css";
import avatar from "/src/assets/images/profilePicture/woman-avatar.svg";
import { PropTypes } from 'prop-types';

const ProfilePicture = ({ image }) => {
 

  
  return (
    <div className="container-image">
      {image ? (
        <img
          className="profile-image"
          src={image}
          alt="user-picture"
        />
      ) : (
        <img
          className="profile-image"
          src={avatar}
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
