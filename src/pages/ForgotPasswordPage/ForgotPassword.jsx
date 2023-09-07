import Title from "../../components/Title";
import Button from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/TextInputBox";
import { useForm } from "react-hook-form";
import api from "../../api/api.js";
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
      <div className="forgot-password-page">
        <Title title="Reset Password" weight="light-title" />
        <p>
          Enter your email to receive the instructions to reset your password
        </p>
        <form onSubmit={handleSubmit(forgotPassword)}>
          <TextInputBox
            label="Email"
            type="email"
            name="email"
            register={register}
            errors={errors}
          />
          <Button
            buttonClass="button-square"
            buttonContent="SEND ME NOW"
            buttonId="orange-button"
          />
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
