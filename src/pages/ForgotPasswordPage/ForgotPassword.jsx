import { useState } from "react";
import Title from "../../components/Title";
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
      <div className="forgot-password-content">
        <ArrowButton />
        <div className="forgot-password-page">
          <div className="forgot-title">
            <Title title="Reset Password" weight="light-title" />
          </div>
          <div className="forgot-password-content">
            <p id="forgot-description">
              Enter your email to receive the instructions to reset your
              password
            </p>
            <form onSubmit={handleSubmit(forgotPassword)}>
              <div>
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
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
