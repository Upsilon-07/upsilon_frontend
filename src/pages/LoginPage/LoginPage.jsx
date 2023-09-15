import api from "../../api/api.js";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/Input/TextInputBox.jsx";
import Title from "../../components/Title";
import "./LoginPageStyles.css";
import AuthContext from "../../contexts/AuthContext.jsx";
import ErrorPopup from "../../components/ErrorPopUp.jsx";
import { useState } from "react";
const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const { setIsAuthenticated } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Remove resolver property

  const navigate = useNavigate();
  const [showError, setShowError] = useState(false); // State to control the visibility of the error popup
  const [errorMessage, setErrorMessage] = useState("");

  const loginUser = async (data) => {
    try {
      const response = await api.post("/auth/login", data);

      if (response.status === 200) {
        // Save token in cookies
        Cookies.set("user_token", response.data.token);
        let config = {
          headers: {
            Authorization: "Bearer " + response.data.token,
          },
        };

        try {
          const userResponse = await api.get("/user", config);

          if (userResponse.status === 200) {
            setUser(userResponse.data);
            setIsAuthenticated(true);
            navigate("/");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        // Check the response data for the specific error message
        if (
          response.status === 401 &&
          response.data ===
            "This email is not registered, please create an account!"
        ) {
          setErrorMessage(
            "This email is not registered, please create an account!"
          );
        } else {
          // Show the default error message for other errors
          setErrorMessage("Incorrect email or password");
        }
        setShowError(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeErrorPopup = () => {
    setShowError(false);
  };
  return (
    <>
      <div className="login-content">
        <div className="login-title">
          <Title title="Log In" weight="title-bold" />
        </div>
        <div className="login-page">
          <form onSubmit={handleSubmit(loginUser)}>
            <div>
              <label>Email:</label>
              <TextInputBox
                type="email"
                placeholder="email"
                register={register}
                errors={errors}
              />
            </div>
            <div>
              <label>Password:</label>
              <TextInputBox
                type="password"
                placeholder="password"
                register={register}
                errors={errors}
              />
            </div>
            <div className="forgot-password-left">
              <Link to="/forgot-password">
                <p>Forgot Password ?</p>
              </Link>
            </div>
            <NextButton
              buttonId="orange-button"
              buttonContent="LOG IN"
              buttonClass="button-square"
              type="submit"
            />
          </form>
        </div>
      </div>
      {showError && (
        <ErrorPopup message={errorMessage} onClose={closeErrorPopup} />
      )}
    </>
  );
};

export default LoginPage;
