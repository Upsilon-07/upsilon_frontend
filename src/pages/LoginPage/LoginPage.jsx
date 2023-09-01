import api from "../../api/api.js";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/TextInputBox";
import Title from "../../components/Title";
import "./LoginPageStyles.css";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Define validation rules for your form fields
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginUser = (data) => {
    // Call the API to log in the user
    api
      .post("/auth/login", data)
      .then((response) => {
        if (response.status === 200) {
          // Save the user's token in cookies
          Cookies.set("user_token", response.data.token);

          // Set up headers for future API calls
          let config = {
            headers: {
              Authorization: "Bearer " + response.data.token,
            },
          };

          // Fetch user data using the token
          api
            .get("/user", config)
            .then((response) => {
              if (response.status === 200) {
                // Update the user context with user data
                setUser(response.data);
                navigate("/");
              } else {
                // Handle API error here, maybe show a user-friendly message
                console.error("Error fetching user data");
              }
            })
            .catch((error) => {
              // Handle API error here, maybe show a user-friendly message
              console.error(error);
            });
        } else {
          // Handle API error here, maybe show a user-friendly message
          console.error("Error logging in");
        }
      })
      .catch((error) => {
        // Handle API error here, maybe show a user-friendly message
        console.error(error);
      });
  };

  return (
    <>
    <div className="login-title">
      <Title title="Log In" />
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
