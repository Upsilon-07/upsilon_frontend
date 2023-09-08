import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/Input/TextInputBox";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const changePassword = (data) => {
    if (data.newPassword === data.repeatPassword) {
      //! api to change password
      setError("");
      delete data.repeatPassword;

      let config = {
        headers: {
          Authorization: "Bearer " + Cookies.get("user_token"),
        },
      };
      api
        .post("/password/change-password", data, config)
        .then((response) => {
          if (response.status === 200) {
            alert("Password changed");
          }
        })
        .catch((error) => console.error(error));
    } else {
      setError("The new password is different from the repeat password");
    }
  };

  return (
    <div>
        <Link to="/user-profile">
        <ArrowButton/>
        </Link>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit(changePassword)}>
      <div>
            <label>Current Password:</label>
            <TextInputBox
              type="password"
              placeholder="password"
              register={register}
              errors={errors}
            />
          </div>
          <div>
            <label>New Password:</label>
            <TextInputBox
              type="password"
              placeholder="newPassword"
              register={register}
              errors={errors}
            />
          </div>
          <div>
            <label>Repeat Password:</label>
            <TextInputBox
              type="password"
              placeholder="repeatPassword"
              register={register}
              errors={errors}
            />
          </div>
          {error !== "" ? <p>{error}</p> : null}
        <NextButton
            buttonClass="button-square"
            buttonContent="SAVE NEW PASSWORD"
            buttonId="orange-button"
          />
      </form>
    </div>
  );
};

export default ChangePassword;