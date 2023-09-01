import { Link } from "react-router-dom";
import { journeyData } from "../../assets/StartJourneyData";
import NextButton from "../../components/next-page-button/NextButton";
import JourneyImage from "../../components/Image";
import Title from "../../components/Title";
import JourneyDescription from "../../components/Desciption";
import "./starjourneystyles.css";
function StartJourneyThree() {
  const id = 3;
  return (
    <>
      <div className="journey-page">
        <div className="journey-image bg-green" id="image-journey-three">
          <JourneyImage data={journeyData.find((data) => data.id === id)} />
        </div>
        <div className="journey-title-description" id="journey-page-three">
          <div className="journey-title">
            <Title title={"Perfect Healthy"} weight={"light-title"} />
            <Title title={"Meals For You"} weight={"bold-title"} />
          </div>
          <div className="journey-description">
            <JourneyDescription
              data={journeyData.find((data) => data.id === id)}
            />
          </div>
        </div>
        <div className="journey-button">
          <Link to="/start-journey-3">
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

export default StartJourneyThree;
