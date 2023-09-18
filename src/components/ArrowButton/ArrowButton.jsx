/* eslint-disable react/prop-types */
import arrow from "../../assets/images/arrow-button.svg";
import "./ArrowButton.css";
import { Link } from "react-router-dom";

const ArrowButton = ({path = "/"}) => {

  return (
    <div className="arrow-return-button">
      <Link to={path}>
        <img className="img-arrow-button" src={arrow} />
      </Link>
    </div>
  );
};

export default ArrowButton;
