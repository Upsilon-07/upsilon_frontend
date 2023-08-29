import "./ProfilePage.css";
import { homePageData } from "../../assets/HomePage/HomePageData";
import Title from "../../components/Title";
import Navbar from "../../components/navbar/Navbar";
import NextButton from "../../components/next-page-button/NextButton";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const id = 2;
  return (
    <div className="profile-page">
      <div className="profile-title">
        <Title data={homePageData.find((data) => data.id === id)} />
      </div>
      <div className="profile-button" id="profile-edit">
        <Link to="/user-profile/edit-profile">
          <NextButton data={homePageData.find((data) => data.id === id)} />
        </Link>
      </div>
      <div className="profile-button" id="change-password">
        <Link to="/user-profile/change-password">
          <NextButton data={homePageData.find((data) => data.id === id + 1)} />
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default ProfilePage;
