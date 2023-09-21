import "./ProfilePicture.css";
import { PropTypes } from "prop-types";
import Avatar from "@mui/material/Avatar";

const ProfilePicture = ({ image}) => {
  return (
    // <div className="user-profile-icon">
       <div className="profile-picture-container-image">
        <Avatar sx={{ height: '60px', width: '60px' }} className="profile-image" src={image ? image : null} />
       </div>
    // </div>
  );
};

ProfilePicture.propTypes = {
  image: PropTypes.string,
};

export default ProfilePicture;
