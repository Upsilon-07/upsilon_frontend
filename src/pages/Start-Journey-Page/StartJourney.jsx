import { Link } from "react-router-dom";
import NextButton from "../../components/next-page-button/NextButton";
import JourneyImage from "../../components/Image";
import Title from "../../components/Title";
import { journeyData } from "../../assets/StartJourneyData";
import JourneyDescription from "../../components/Desciption";
import "./starjourneystyles.css";
function StartJourney() {
  const id = 1;

  return (
    <>
      <div className="journey-page">
        <div className="journey-title-description" id="journey-page-one">
          <div className="journey-title">
            <Title title={"Have the best"} weight={"light-title"} />
            <Title title={"Yoga Experience"} weight={"bold-title"} />
          </div>
          <div className="journey-description">
            <JourneyDescription
              data={journeyData.find((data) => data.id === id)}
            />
          </div>
        </div>
        <div className="journey-button">
          <Link to="/start-journey-1">
            <NextButton
              buttonId="orange-button"
              buttonContent="Start Journey"
              buttonClass="button-round"
            />
          </Link>
        </div>
        <div className="journey-image" id="image-journey-one">
          <JourneyImage data={journeyData.find((data) => data.id === id)} />
        </div>
      </div>
    </>
  );
}

export default StartJourney;
