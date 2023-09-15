import { journeyData } from "../../assets/StartJourneyData";
import NextButton from "../../components/next-page-button/NextButton";
import JourneyImage from "../../components/Image";
import Title from "../../components/Title";
import JourneyDescription from "../../components/Desciption";
import "./starjourneystyles.css";
import { Link } from "react-router-dom";
function StartJourneyFour() {
  const id = 4;

  return (
    <>
      <div className="journey-page">
        <div className="journey-image" id="image-journey-four">
          <JourneyImage data={journeyData.find((data) => data.id === id)} />
        </div>
        <div className="journey-title-description" id="journey-page-four">
          <div className="journey-title">
            <Title title={"Stay"} weight={"light-title"} />
            <Title title={"Healthy"} weight={"bold-title"} />
          </div>
          <div className="journey-description">
            <JourneyDescription
              data={journeyData.find((data) => data.id === id)}
            />
          </div>
        </div>
        <div className="journey-button" id="journey-login">
        <Link to="/login">
          <NextButton
            buttonId="orange-button"
            buttonContent="Login"
            buttonClass="button-round"
          />
           </Link>
        <Link to="/register">
          <NextButton
            buttonId="white-button"
            buttonContent="Register"
            buttonClass="button-round"
          />
          </Link>
        </div>
      </div>
    </>
  );
}

export default StartJourneyFour;
