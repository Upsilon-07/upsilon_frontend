import { useNavigate } from "react-router-dom";
import exit from "../../assets/images/exitPage.png";
import "./ExitPage.css";

const ExitPage = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div onClick={back} className="exit">
      <img className="img-exit" src={exit} />
    </div>
  );
};

export default ExitPage;
