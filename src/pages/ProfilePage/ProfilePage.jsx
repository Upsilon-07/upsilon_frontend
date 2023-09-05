import "./ProfilePage.css";
import Title from "../../components/Title";
import Navbar from "../../components/navbar/Navbar";
import NextButton from "../../components/next-page-button/NextButton";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import DisabledTextInputBox from "../../components/DisabledTextInputBox/DisabledTextInputBox";

const ProfilePage = () => {

  const { user } = useContext(UserContext);


  return (
    <div className="profile-page">
      <NavbarDesktop />
      <div className="profile-title">
        <Title title="Profile" weight={"light-title"} />
        <ProfilePicture />
      </div>

      <form className="profile-input-box">
        <label>Username:</label>
        <DisabledTextInputBox
            type="username"
            value={user.username}
            readOnly
          />

        <label>E-mail:</label>
        <DisabledTextInputBox
            type="email"
            value={user.email}
            readOnly
          />
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
