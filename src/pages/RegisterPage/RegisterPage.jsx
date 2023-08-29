import NextButton from "../../components/next-page-button/NextButton";
import TextInputBox from "../../components/TextInputBox";
import Title from "../../components/Title";
function RegisterPage() {
  const Data = {
    title: "Resgister",
    buttonContent: 'Next',
  };
  return (
    <>
      <div>
        <Title data={Data} />
        <TextInputBox data={Data} />
        <NextButton data={Data} />
      </div>
    </>
  );
}

export default RegisterPage;
