import "./ProfilePage.css";
import { homePageData } from "../../assets/HomePage/HomePageData";
import Title from "../../components/Title";
import Navbar from "../../components/navbar/Navbar";
import NextButton from "../../components/next-page-button/NextButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import TextInputBox from "../../components/TextInputBox";

const ProfilePage = () => {
  const id = 2;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const DataOne = {
    type: "text",
    value: userName,
    onChange: handleUserNameChange,
  };

  const DataTwo = {
    type: "email",
    value: email,
    onChange: handleEmailChange,
  };
  
  return (
    <div className="profile-page">
        <div>
            
        </div>
      <div className="profile-title">
        <Title data={homePageData.find((data) => data.id === id)} />
      </div>

        <div className="profile-input-box">
        <div className="profile-input-box1"><TextInputBox data={DataOne} /></div>
        <div className="profile-input-box2"><TextInputBox data={DataTwo} /></div>
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
