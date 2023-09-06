import "./EditProfilePage.css"
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Navbar from "../../components/navbar/Navbar";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import { Link } from "react-router-dom";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import Title from "../../components/Title";
import TextInputBox from "../../components/TextInputBox";
import { useForm } from "react-hook-form";
import NextButton from "../../components/next-page-button/NextButton";

const EditProfilePage = () => {

    const { user, setUser } = useContext(UserContext);


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  return (
    <div className="edit-profile-page">
        <NavbarDesktop />
      <div className="edit-profile-page-return-button">
      <Link to="/user-profile" >
        <ArrowButton  />
      </Link></div>
      <div className="edit-profile-title">
        <div><Title title="Edit Profile" weight={"light-title"} /></div>
      </div>
      <div>
        <form onSubmit={handleSubmit()}>
          <div>
            <TextInputBox
              label="username"
              type="text"
              name="username"
              register={register}
              errors={errors}
              placeholder={user.username ? user.username : null}
            />
          </div>
          <div>
            <TextInputBox
              label="Email"
              type="email"
              name="email"
              register={register}
              errors={errors}
              placeholder={user.email ? user.email : null}
            />
          </div>
          <div>
            <TextInputBox
              label="Image"
              type="text"
              name="image"
              register={register}
              errors={errors}
              placeholder="Upload a Profile Image"
            />
          </div>
          </form>
          <div className="save-changes-button">
          <NextButton
            buttonId="orange-button"
            buttonContent="SAVE CHANGES"
            buttonClass="button-square"
          />
      </div>
      <div className="cancel-changes-button">
        <Link to="/user-profile">
          <NextButton
            buttonId="white-button"
            buttonContent="CANCEL CHANGES"
            buttonClass="button-square"
          />
        </Link>
      </div>
        </div>
      <Navbar />
    </div>
  );
};

export default EditProfilePage
