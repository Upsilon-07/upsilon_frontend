import api from "../../api/api.js";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/TextInputBox";
import Title from "../../components/Title";
import "./LoginPageStyles.css";
import AuthContext from "../../contexts/AuthContext.jsx";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const { setIsAuthenticated } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginUser = (data) => {
    api
      .post("/auth/login", data)
      .then((response) => {
        if (response.status === 200) {
          //! save token in cookies
          Cookies.set("user_token", response.data.token);
          // //! save token in local storage
          // localStorage.setItem("user_token", response.data.token)
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
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="login-title">
        <Title title="Log In" weight="title-bold" />
      </div>
      <div>
        <form onSubmit={handleSubmit(loginUser)}>
          <div>
            <label>Email:</label>
            <TextInputBox
              label="Email"
              type="email"
              name="email"
              register={register}
              errors={errors}
            />
          </div>
          <div>
            <label>Password:</label>
            <TextInputBox
              label="Password"
              type="password"
              name="password"
              register={register}
              errors={errors}
            />
          </div>
          <Link to="/">
            <p id="forgot-password-left">forgot password</p>
          </Link>
          <NextButton
            buttonId="orange-button"
            buttonContent="LOG IN"
            buttonClass="button-square"
          />
        </form>
      </div>
    </>
  );
};

export default LoginPage;
