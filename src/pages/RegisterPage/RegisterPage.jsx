import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/Input/TextInputBox";
import Title from "../../components/Title";
import "./registerPageStyles.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../api/api.js";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "../../schemas/user-schema";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const navigate = useNavigate();

  const createUser = (data) => {
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
    <div className="register-content">

      <div className="register-title">
        <Title title="Register" weight="title-bold" />
      </div>
      <div className="register-page">
        <form onSubmit={handleSubmit(createUser)}>
          <label>username:</label>
          <TextInputBox
            type="username"
            placeholder="username"
            register={register}
            errors={errors}
          />
            <label>Email:</label>
            <TextInputBox
              type="email"
              placeholder="email"
              register={register}
              errors={errors}
            />
            <label>Password:</label>
            <TextInputBox
              type="password"
              placeholder="password"
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
    </div>
    </>
  );
}

export default RegisterPage;
