import "./ProfilePage.css";
import Title from "../../components/Title";
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
    <div className="profile-page">
      <div className="profile-page-return-button">
      <Link to="/">
        <ArrowButton />
      </Link>
      </div>
      <div className="profile-title">
        <div>
          <Title title="Profile" weight={"light-title"} />
        </div>
      </div>
      <div className="profile-page-user-picture">
        <ProfilePicture image={user.picture} />
      </div>

      <form className="profile-input-box">
        <DisabledTextInputBox
          type="username"
          value={user.username ? user.username : null}
          readOnly
        />

        <DisabledTextInputBox
          type="email"
          value={user.email ? user.email : null}
          readOnly
        />
      </form>

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
        <Link to="/user-profile/change-password">
          <NextButton
            buttonId="white-button"
            buttonContent="CHANGE PASSWORD"
            buttonClass="button-square"
          />
        </Link>
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
  );
};

export default ProfilePage;
