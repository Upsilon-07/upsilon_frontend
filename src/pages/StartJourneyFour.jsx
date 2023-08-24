import { journeyData } from "../assets/StartJourneyData";
import NextButton from "../components/next-page-button/NextButton";
import JourneyImage from "../components/JourneyImage";
import JourneyTitle from "../components/JourneyTitle";
import JourneyDescription from "../components/JourneyDesciption";
function StartJourneyFour() {
  const id = 4;

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
          <NextButton
            journeyData={journeyData.find((data) => data.id === id)}
          />
        </div>
      </div>
    </>
  );
}

export default StartJourneyFour;
