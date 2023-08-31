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
      <div>
        <Title Title="Register" />
        <form onSubmit={handleSubmit(createUser)}>
          <TextInputBox
            label="Email"
            type="email"
            name="email"
            register={register}
            errors={errors}
          />
          <TextInputBox
            label="Password"
            type="password"
            name="password"
            register={register}
            errors={errors}
          />
          <NextButton/>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
