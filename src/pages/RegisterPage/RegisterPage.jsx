import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/TextInputBox";
import Title from "../../components/Title";
import { useState } from "react";
function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
//   const DataThree = {
//     type: "email",
//     placeholder: "enter your email",
//     value: email,
//     onChange: handleEmailChange,
//   };
  return (
    <>
      <div>
        <Title data={Data} />
        <TextInputBox data={Data} />
        <TextInputBox data={DataTwo} />
        {/* <TextInputBox data={DataThree} /> */}
        <NextButton data={Data} />

      </div>
    </>
  );
}

export default RegisterPage;
