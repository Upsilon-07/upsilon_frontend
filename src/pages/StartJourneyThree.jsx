import { Link } from "react-router-dom";
import { journeyData } from "../assets/StartJourneyData";
import NextButton from "../components/next-page-button/NextButton";
import JourneyImage from "../components/JourneyImage";
import JourneyTitle from "../components/JourneyTitle";
import JourneyDescription from "../components/JourneyDesciption";
function StartJourneyThree() {
  const id = 3;
  return (
    <>
      <div className="journey-page">
        <div className="journey-image">
          <JourneyImage
            journeyData={journeyData.find((data) => data.id === id)}
          />
        </div>

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
          <Link to="/3">
            <NextButton
              journeyData={journeyData.find((data) => data.id === id)}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default StartJourneyThree;
