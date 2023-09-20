import "./ProfilePicture.css";
import { PropTypes } from "prop-types";
import Avatar from "@mui/material/Avatar";

const ProfilePicture = ({ image}) => {
  return (
    <div className="background-green">
        <Avatar sx={{ height: '110px', width: '110px' }} className="profile-image" src={image ? image : null} />
    </div>
  );
};

ProfilePicture.propTypes = {
  image: PropTypes.string,
};

export default ProfilePicture;
