import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/Input/TextInputBox";
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
      <div className="register-page">
        <form onSubmit={handleSubmit(createUser)}>
          <div className="register-title">
            <h1 id="change-pass-title">Register</h1>
          </div>
          <div className="register-container">
            <div className="register-label">
              <label>username:</label>
            </div>
            <TextInputBox
              type="username"
              placeholder="username"
              register={register}
              errors={errors}
            />
          </div>
          <div className="register-container">
            <div className="register-label">
              <label>Email:</label>
            </div>
            <TextInputBox
              type="email"
              placeholder="email"
              register={register}
              errors={errors}
            />
          </div>
          <div className="register-container">
            <div className="register-label">
              <label>Password:</label>
            </div>
            <TextInputBox
              type="password"
              placeholder="password"
              register={register}
              errors={errors}
            />
          </div>
          <div className="register-button">
          <NextButton
            buttonId="orange-button"
            buttonContent="Next"
            buttonClass="button-square"
          />
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
