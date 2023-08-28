import { Link } from "react-router-dom";
import { journeyData } from "../../assets/StartJourneyData";
import NextButton from "../../components/next-page-button/NextButton";
import JourneyImage from "../../components/Image";
import Title from "../../components/Title";
import JourneyDescription from "../../components/Desciption";
import "./starjourneystyles.css";
function StartJourney() {
  const id = 1;

  return (
    <>
      <div className="journey-page">
        <div className="journey-title-description" id="journey-page-one">
          <div className="journey-title">
            <Title data={journeyData.find((data) => data.id === id)} />
          </div>
          <div className="journey-description">
            <JourneyDescription
              data={journeyData.find((data) => data.id === id)}
            />
          </div>
        </div>
        <div className="journey-button">
          <Link to="/start-journey-1">
            <NextButton data={journeyData.find((data) => data.id === id)} />
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
