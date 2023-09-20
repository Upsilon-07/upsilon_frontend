/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import exit from "../../assets/images/exitPage.png";
import "./ExitPage.css";

const ExitPage = ({ path = "/" }) => {
  return (
    <Link to={path}>
      <img className="img-exit" src={exit} />
    </Link>
  );
};

export default ExitPage;
