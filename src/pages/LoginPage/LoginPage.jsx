import api from "../../api/api.js";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/Input/TextInputBox.jsx";
import "./LoginPageStyles.css";
import AuthContext from "../../contexts/AuthContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "../../schemas/user-schema";
const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const navigate = useNavigate();

  const loginUser = (data) => {
    api
      .post("/auth/login", data)
      .then((response) => {
        if (response.status === 200) {
          //! save token in cookies
          Cookies.set("user_token", response.data.token);
          let config = {
            headers: {
              Authorization: "Bearer " + response.data.token,
            },
          };

          api
            .get("/user", config)
            .then((response) => {
              if (response.status === 200) {
                setUser(response.data);
                setIsAuthenticated(true);
                navigate("/");
              }
            })
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data);
      });
  };

  return (
    <>
      <div className="login-page">
        <form onSubmit={handleSubmit(loginUser)}>
        <div className="register-title">
            <h1 id="change-pass-title">Log In</h1>
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
          {error && <p className="error-message">{error}</p>}
          <div className="forgot-password-left">
            <Link to="/forgot-password">
              <p>Forgot Password ?</p>
            </Link>
          </div>
          <div className="login-button">
            <NextButton
              buttonId="orange-button"
              buttonContent="LOG IN"
              buttonClass="button-square"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
