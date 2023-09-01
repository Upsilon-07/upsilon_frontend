import { Link } from "react-router-dom";
import { journeyData } from "../../assets/StartJourneyData";
import NextButton from "../../components/next-page-button/NextButton";
import JourneyImage from "../../components/Image";
import Title from "../../components/Title";
import JourneyDescription from "../../components/Desciption";
import "./starjourneystyles.css";
function StartJourneyTwo() {
  const id = 2;

  return (
    <>
      <div className="journey-page">
        <div className="journey-image" id="image-journey-two">
          <JourneyImage data={journeyData.find((data) => data.id === id)} />
        </div>
        <div className="journey-title-description" id="journey-page-two">
          <div className="journey-title">
          <Title title={"Enjoy Your"} weight={"light-title"} />
        <Title title={"Yoga Anytime"} weight={"bold-title"} />
          </div>
          <div className="journey-description">
            <JourneyDescription
              data={journeyData.find((data) => data.id === id)}
            />
          </div>
        </div>
        <div className="journey-button">
          <Link to="/start-journey-2">
            <NextButton
              buttonId="orange-button"
              buttonContent="Get Started"
              buttonClass="button-round"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default StartJourneyTwo;
