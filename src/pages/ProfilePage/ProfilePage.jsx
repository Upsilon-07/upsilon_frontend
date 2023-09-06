import "./ProfilePage.css";
import Title from "../../components/Title";
import Navbar from "../../components/navbar/Navbar";
import NextButton from "../../components/next-page-button/NextButton";
import { Link, Navigate } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import DisabledTextInputBox from "../../components/DisabledTextInputBox/DisabledTextInputBox";
import ArrowButton from "../../components/ArrowButton/ArrowButton";

const ProfilePage = () => {

  const { user } = useContext(UserContext);

  const { edit, setEdit } = useState(false);

  return (
    <div className="profile-page">
      <NavbarDesktop />
      <div className="profile-page-return-button">
      <Link to="/" >
        <ArrowButton  />
      </Link></div>
      <div className="profile-title">
        <div><Title title="Profile" weight={"light-title"} /></div>
        {edit ? <Navigate to="/edit-profile" /> : <div className="profile-page-user-picture"><ProfilePicture /></div>}
      </div>

      <form className="profile-input-box">
        <DisabledTextInputBox type="username" value={user.username ? user.username : null} readOnly />

        <DisabledTextInputBox type="email" value={user.email ? user.email : null} readOnly />
      </form>

      <div className="profile-button" id="profile-edit-button">
        <Link to="/edit-profile">
          <NextButton
            buttonId="orange-button"
            buttonContent="EDIT PROFILE"
            buttonClass="button-square"
            onClick={() => setEdit(true)}
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
