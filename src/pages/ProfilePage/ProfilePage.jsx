import "./ProfilePage.css";
import NextButton from "../../components/next-page-button/NextButton";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import DisabledTextInputBox from "../../components/DisabledTextInputBox/DisabledTextInputBox";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import Cookies from "js-cookie";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { setUser, user } = useContext(UserContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuthenticated(false);
    setUser({});
    Cookies.remove("user_token");
    navigate("/login");
  };

  return (
    <>
      <div className="change-password-header">
        <ArrowButton path="/" />
      </div>
      <div className="profile-page-header">
        <div className="profile-title">
          <h1 id="subtitle-home-one"> Profile</h1>
        </div>
        <div className="profile-page-user-picture">
          <ProfilePicture image={user.picture} />
        </div>
      </div>
      <div className="profile-page">
        <form className="profile-input-box">
          <div className="disabled-box-container">
            <DisabledTextInputBox
              type="username"
              value={user.username ? user.username : null}
              readOnly
            />
          </div>
          <div className="disabled-box-container">
            <DisabledTextInputBox
              type="email"
              value={user.email ? user.email : null}
              readOnly
            />
          </div>
        </form>
        <div className="button-container-profile">
          <div className="profile-button" id="profile-edit-button">
            <Link to="/edit-profile">
              <NextButton
                buttonId="orange-button"
                buttonContent="EDIT PROFILE"
                buttonClass="button-square"
              />
            </Link>
          </div>
          <div className="profile-button" id="change-password">
            <Link to="/profile-change-password">
              <NextButton
                buttonId="white-button"
                buttonContent="CHANGE PASSWORD"
                buttonClass="button-square"
              />
            </Link>
          </div>
        </div>
        <form onSubmit={logout} className="profile-button" id="logout-button">
          <NextButton
            buttonId="white-button"
            buttonContent="LOG OUT"
            buttonClass="button-square"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
