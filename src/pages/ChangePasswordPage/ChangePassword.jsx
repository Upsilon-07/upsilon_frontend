import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/Input/TextInputBox";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import "./ChangePasswordStyles.css";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [isWrongCurrentPassword, setIsWrongCurrentPassword] = useState(false);
  const [isNewPasswordMismatch, setIsNewPasswordMismatch] = useState(false);
  const [isSameAsCurrent, setIsSameAsCurrent] = useState(false); // New state for same as current password
  const [isPasswordSaved, setIsPasswordSaved] = useState(false);

  const changePassword = (data) => {
    if (data.newPassword === data.repeatPassword) {
      //! api to change password
      setIsWrongCurrentPassword(false);
      setIsNewPasswordMismatch(false);
      setIsSameAsCurrent(false); // Reset the same as current flag
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
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 401) {
              setIsWrongCurrentPassword(true);
            } else if (error.response.status === 400) {
              const responseMessage = error.response.data.message;
              if (responseMessage === "New password same as current password") {
                setIsSameAsCurrent(true);
              } else {
                setIsNewPasswordMismatch(true);
                setError(
                  "The new password is different from the repeat password"
                );
              }
            }
          }
        });
    } else {
      setIsNewPasswordMismatch(true);
      setError("The new password is different from the repeat password");
    }
  };

  return (
    <>
      <div>
        <Link to="/user-profile">
          <ArrowButton />
        </Link>
      </div>
      <div className="change-password-title">
        <h1 id="change-pass-title">Change Password</h1>
      </div>
      <div className="change-password-page">
        <form onSubmit={handleSubmit(changePassword)}>
          <div>
            <label>Current Password:</label>
            <TextInputBox
              type="password"
              placeholder="password"
              register={register}
              errors={errors}
            />
          </div>
          <div>
            <label>New Password:</label>
            <TextInputBox
              type="password"
              placeholder="newPassword"
              register={register}
              errors={errors}
            />
          </div>
          <div>
            <label>Repeat Password:</label>
            <TextInputBox
              type="password"
              placeholder="repeatPassword"
              register={register}
              errors={errors}
            />
          </div>
          {isWrongCurrentPassword && (
            <p className="error-message">Wrong password, please try again.</p>
          )}
          {isNewPasswordMismatch && <p className="error-message">{error}</p>}
          {isSameAsCurrent && (
            <p className="error-message">
              New password cannot be the same as the current password.
            </p>
          )}
          <div className="button-container">
            <NextButton
              buttonClass={`button-square ${
                isPasswordSaved ? "green-button" : "orange-button"
              }`}
              buttonContent={
                isPasswordSaved ? "Password Saved" : "Save New Password"
              }
              buttonId={isPasswordSaved ? "green-button" : "orange-button"}
            />
          </div>
        </form>
        {!isPasswordSaved && (
          <Link to="/user-profile">
            <NextButton
              buttonClass="button-square"
              buttonContent="Cancel Changes"
              buttonId="white-button"
            />
          </Link>
        )}
      </div>
    </>
  );
};

export default ChangePassword;
