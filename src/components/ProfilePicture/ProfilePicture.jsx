import "./ProfilePicture.css";
import avatar from "/src/assets/images/profilePicture/woman-avatar.svg";
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";

const ProfilePicture = ({ image }) => {
 

  
  return (
    <div className="container-image">
      <Link to={'/user-profile'}>
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
      </Link>
    </div>
  );
};

ProfilePicture.propTypes = {
  image: PropTypes.string,
};

export default ProfilePicture;
