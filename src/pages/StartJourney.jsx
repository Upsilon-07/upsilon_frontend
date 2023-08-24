import { Link } from "react-router-dom";
import { journeyData } from "../assets/StartJourneyData";
import NextButton from "../components/next-page-button/NextButton";
import JourneyImage from "../components/JourneyImage";
import JourneyTitle from "../components/JourneyTitle";
import JourneyDescription from "../components/JourneyDesciption";
function StartJourney() {
  const id = 1;

  return (
    <>
      <div className="journey-page">
        <div className="journey-title">
          <JourneyTitle
            journeyData={journeyData.find((data) => data.id === id)}
          />
        </div>
        <div className="journey-description">
          <JourneyDescription
            journeyData={journeyData.find((data) => data.id === id)}
          />
        </div>
        <div className="journey-button">
          <Link to="/1">
            <NextButton
              journeyData={journeyData.find((data) => data.id === id)}
            />
          </Link>
        </div>
        <div className="journey-image">
          <JourneyImage
            journeyData={journeyData.find((data) => data.id === id)}
          />
        </div>
      </div>
    </>
  );
}

export default StartJourney;
