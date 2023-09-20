/* eslint-disable react/prop-types */
import arrow from "../../assets/images/arrow-button.svg";
import "./ArrowButton.css";
import { Link } from "react-router-dom";

const ArrowButton = ({path = "/"}) => {

  return (

      <Link to={path}>
        <img className="img-arrow-button" src={arrow} />
      </Link>

  );
};

export default ArrowButton;
