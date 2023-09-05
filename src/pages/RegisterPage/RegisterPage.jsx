import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/TextInputBox";
import Title from "../../components/Title";
import "./registerPageStyles.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../api/api.js";
function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const createUser = (data) => {
    console.log(data);
    api
      .post("/auth/register", data)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          console.error(error);
          alert(error.response.data);
        }
      });
  };
  return (
    <>
      <div className="register-title">
        <Title title="Register" weight="title-bold" />
      </div>
      <div className="register-page">
        <form onSubmit={handleSubmit(createUser)}>
          <label>username:</label>
          <TextInputBox
            label="Username"
            type="username"
            name="username"
            register={register}
            errors={errors}
          />
          <label>email:</label>
          <TextInputBox
            label="Email"
            type="email"
            name="email"
            register={register}
            errors={errors}
          />
          <label>password:</label>
          <TextInputBox
            label="Password"
            type="password"
            name="password"
            register={register}
            errors={errors}
          />
          <NextButton
            buttonId="orange-button"
            buttonContent="Next"
            buttonClass="button-square"
          />
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
