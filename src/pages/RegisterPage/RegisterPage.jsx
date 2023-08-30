import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/TextInputBox";
import Title from "../../components/Title";
import './registerPageStyles.css'
import { useState } from "react";
function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const Data = {
    title: "Resgister",
    buttonContent: "Next",
    buttonId: "orange-button",
    type: "email",
    placeholder: "enter your email",
    value: email,
    onChange: handleEmailChange,
  };
  const DataTwo = {

    type: "password",
    placeholder: "enter your password",
    value: password,
    onChange: handlePasswordChange,
  };
  const DataThree = {
    type: "username",
    placeholder: "enter your username",
    value: username,
    onChange: handleUsernameChange,
  };
  return (
    <>
      <div className="register-page">
        <div className="register-title">
        <Title data={Data} />
        </div>
        <div>
        <TextInputBox data={DataThree} />
        <TextInputBox data={Data} />
        <TextInputBox data={DataTwo} />
        </div>
        <div>
        <NextButton data={Data} />
        </div>

      </div>
    </>
  );
}

export default RegisterPage;
