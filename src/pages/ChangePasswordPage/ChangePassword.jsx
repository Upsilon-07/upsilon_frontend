import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/Input/TextInputBox";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import "./ChangePasswordStyles.css";
import passwordSchema from "../../schemas/password-schema";
import { yupResolver } from "@hookform/resolvers/yup";
const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const [error, setError] = useState("");
  const [isPasswordSaved, setIsPasswordSaved] = useState(false);
  const navigate = useNavigate();
  const changePassword = (data) => {
    console.log(data);
    if (data.password !== data.newPassword) {
      if (data.newPassword === data.repeatPassword) {
        setError("");
        delete data.repeatPassword;

        let config = {
          headers: {
            Authorization: "Bearer " + Cookies.get("user_token"),
          },
        };
        api
          .post("/password/change-password", data, config)
          .then((response) => {
            if (response.status === 200) {
              setIsPasswordSaved(true);
              setTimeout(() => {
                navigate("/user-profile");
              }, 2500);
            }
          })
          .catch((error) => {
            console.error(error);
            setError(error.response.data);
          });
      } else {
        setError("The repeated password should be the same of new password.");
      }
    } else {
      setError("The new password should be different of the current password.");
    }
  };
  return (
    <>
      <div className="change-pass-header">
        <ArrowButton path="/user-profile" />
      </div>
      <div className="change-password-page">
        <div className="change-password-title">
          <h1 id="change-pass-title">Change Password</h1>
        </div>
        <form className="form-password" onSubmit={handleSubmit(changePassword)}>
          <div className="form-container">
          <div className="form-label">
            <label id="label-style">Current Password:</label>
            </div>
            <TextInputBox
              type="password"
              placeholder="password"
              register={register}
              errors={errors}
            />
          </div>
          <div className="form-container">
          <div className="form-label">
            <label id="label-style">New Password:</label>
            </div>
            <TextInputBox
              type="password"
              placeholder="newPassword"
              register={register}
              errors={errors}
            />
          </div>
          <div className="form-container">
            <div className="form-label">
            <label id="label-style">Repeat New Password:</label>
            </div>
            <TextInputBox
              type="password"
              placeholder="repeatPassword"
              register={register}
              errors={errors}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <NextButton
            buttonClass={`button-square ${
              isPasswordSaved ? "green-button" : "orange-button"
            }`}
            buttonContent={
              isPasswordSaved ? "CHANGES HAVE BEEN SAVED" : "SAVE NEW PASSWORD"
            }
            buttonId={isPasswordSaved ? "green-button" : "orange-button"}
          />
        </form>
        {!isPasswordSaved && (
          <Link to="/user-profile">
            <NextButton
              buttonClass="button-square"
              buttonContent="CANCEL CHANGES"
              buttonId="white-button"
            />
          </Link>
        )}
      </div>
    </>
  );
};

export default ChangePassword;
