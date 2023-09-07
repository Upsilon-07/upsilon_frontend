// import CourseFavouritePage from "../../pages/CourseFavouritePage/CourseFavouritePage";
import "./ProfilePicture.css";
import avatar from "/src/assets/images/profilePicture/woman-avatar.svg";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ProfilePicture = ({ profileImage }) => {
  return (
    <div className="container-top">
      <Link to={"/user-profile"}>
        {profileImage ? (
          <img
            className="profile-image"
            src={profileImage}
            alt="user-picture"
          />
        ) : (
          <img className="profile-image" src={avatar} alt="user-avatar" />
        )}
      </Link>
      {/* {btnToFavouritePage ? (
      <img className="btn1" src={btnToFavouritePage} alt="Image 1" />
      ) : btnToPreviousPage ? (
        <img className="btn2" src={btnToPreviousPage} alt="Image 2" />
      ) : cancelButton ? (
        <img className="btn3" src={cancelButton} alt="Image 3" />
      ) : null} */}
    </div>
  );
};

ProfilePicture.propTypes = {
  profileImage: PropTypes.string,
  btnToFavouritePage: PropTypes.string,
  btnToPreviousPage: PropTypes.string,
  cancelButton: PropTypes.string,
};

export default ProfilePicture;
