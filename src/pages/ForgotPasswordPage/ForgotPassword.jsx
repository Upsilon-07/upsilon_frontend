import Title from "../../components/Title";
import Button from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/Input/TextInputBox";
import { useForm } from "react-hook-form";
import api from "../../api/api.js";
import './forgotPasswordStyles.css'
const  ForgotPassword = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const forgotPassword = (data) => {
        api
          .post("/password/forgot-password", data)
          .then((response) => {
            if (response.status === 200) {
              alert("Email has been send");
            }
          })
          .catch((error) => console.error(error));
      };

  return (
    <>
        <div className="forgot-title">
        <Title title="Reset Password" weight="light-title" />
        </div>
      <div className="forgot-password-page">
        <p id="forgot-description">
          Enter your email to receive the instructions to reset your password
        </p>
        <form onSubmit={handleSubmit(forgotPassword)}>
          <TextInputBox
            type="email"
            placeholder="email"
            register={register}
            errors={errors}
          />
          <div className="forgot-button">
          <Button
            buttonClass="button-square"
            buttonContent="SEND ME NOW"
            buttonId="orange-button"
          />
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
