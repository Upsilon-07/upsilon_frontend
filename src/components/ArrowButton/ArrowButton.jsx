import { useNavigate } from "react-router-dom";
import arrow from "../../assets/images/arrow-button.svg";
import "./ArrowButton.css";

const ArrowButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div onClick={goBack} className="arrow-return-button">
      <img className="img-arrow-button" src={arrow} />
    </div>
  );
};

export default ArrowButton;
