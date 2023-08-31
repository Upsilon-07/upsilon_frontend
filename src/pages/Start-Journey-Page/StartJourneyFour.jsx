import { journeyData } from "../../assets/StartJourneyData";
import { journeyBold } from "../../assets/StartJouneyBold";
import NextButton from "../../components/next-page-button/NextButton";
import JourneyImage from "../../components/Image";
import Title from "../../components/Title";
import JourneyDescription from "../../components/Desciption";
import "./starjourneystyles.css";
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
            <Title data={journeyData.find((data) => data.id === id)} />
            <Title data={journeyBold.find((data) => data.id === id)} />
          </div>
          <div className="journey-description">
            <JourneyDescription
              data={journeyData.find((data) => data.id === id)}
            />
          </div>
        </div>
        <div className="journey-button" id="journey-login">
          <NextButton data={journeyData.find((data) => data.id === id)} />
        </div>
        <div className="journey-button" id="button-reverse">
          <NextButton data={journeyData.find((data) => data.id === id + 1)} />
        </div>
      </div>
    </>
  );
}

export default StartJourneyFour;
