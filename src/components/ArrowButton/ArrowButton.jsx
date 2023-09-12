import { useNavigate } from "react-router-dom";
import "./ArrowButton.css";

const ArrowButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div onClick={goBack} className="arrow-return-button">
      <img
        className="img-arrow-button"
        src="/src/assets/images/arrow-button.svg"
      />
    </div>
  );
};

export default ArrowButton;
