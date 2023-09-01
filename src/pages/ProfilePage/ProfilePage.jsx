import "./ProfilePage.css";
import Title from "../../components/Title";
import Navbar from "../../components/navbar/Navbar";
import NextButton from "../../components/next-page-button/NextButton";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <NavbarDesktop />
      <div className="profile-title">
        <Title title="Profile" weight={"light-title"} />
        <ProfilePicture />
      </div>

      <form className="profile-input-box">
        <label>User name:</label>
        <input type="text" className="profile-input-box1" name="user_name" />

        <label>E-mail:</label>
        <input type="email" className="profile-input-box2" name="email" />
      </form>

      <div className="profile-button" id="profile-edit-button">
        <Link to="/user-profile/edit-profile">
          <NextButton
            buttonId="orange-button"
            buttonContent="EDIT PROFILE"
            buttonClass="button-square"
          />
        </Link>
      </div>
      <div className="profile-button" id="change-password">
        <Link to="/user-profile/change-password">
          <NextButton
            buttonId="white-button"
            buttonContent="CHANGE PASSWORD"
            buttonClass="button-square"
          />
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default ProfilePage;
