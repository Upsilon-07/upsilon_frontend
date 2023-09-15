// import CourseFavouritePage from "../../pages/CourseFavouritePage/CourseFavouritePage";
import "./ProfilePicture.css";
// import avatar from "../../images/profilePicture/woman-avatar.svg";
import { PropTypes } from "prop-types";
import Avatar from "@mui/material/Avatar";

const ProfilePicture = ({ image }) => {
  return (
    <div className="user-profile-icon">
      <div className="profile-picture-container-image">
        <Avatar className="profile-image" src={image ? image : null} />
        {/* {image ? (
          <img className="profile-image" src={image} alt="user-picture" />
        ) : (
          <img className="profile-image" src={avatar} alt="user-avatar" />
        )} */}
      </div>
    </div>
  );
};

ProfilePicture.propTypes = {
  image: PropTypes.string,
};

export default ProfilePicture;
