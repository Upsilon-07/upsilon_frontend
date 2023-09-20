import { useState } from "react";
import Button from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/Input/TextInputBox";
import { useForm } from "react-hook-form";
import api from "../../api/api.js";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import "./forgotPasswordStyles.css";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define a state variable to track the button's state
  const [buttonState, setButtonState] = useState({
    isClicked: false,
    buttonText: "SEND ME NOW",
  });

  const forgotPassword = (data) => {
    api
      .post("/password/forgot-password", data)
      .then((response) => {
        if (response.status === 200) {
          // Update the button's state when the email is sent
          setButtonState({
            isClicked: true,
            buttonText: "EMAIL IS SENT",
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="forgot-password-header">
        <ArrowButton path="/login" />
      </div>
      <div className="forgot-password-page">
          <div className="forgot-password-title">
            <h1 id="change-pass-title">Reset Password</h1>
          </div>
          <div>
          <p id="forgot-description">
            Enter your email to receive the instructions to reset your password
          </p>
          </div>
        <form onSubmit={handleSubmit(forgotPassword)}>
          <div className="forgot-container">
            <TextInputBox
              type="email"
              placeholder="email"
              register={register}
              errors={errors}
            />
          </div>
          <div className="forgot-button">
            <Button
              buttonClass="button-square"
              buttonContent={buttonState.buttonText}
              buttonId={`${
                buttonState.isClicked ? "green-button" : "orange-button"
              }`}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
