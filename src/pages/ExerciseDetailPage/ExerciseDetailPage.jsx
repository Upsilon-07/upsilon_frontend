import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import Navbar from "../../components/navbar/Navbar";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Link } from "react-router-dom";
import ExitPage from "../../components/ExitPage/ExitPage";
import start from "../../assets/images/Exercise/play-button.svg";
import next from "../../assets/images/Exercise/next-set.svg";
import previous from "../../assets/images/Exercise/previous-set.svg";
import stop from "../../assets/images/Exercise/pause-button.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/api";
import "./ExerciseDetailPage.css";

const ExerciseDetailPage = () => {
  const { id } = useParams();

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [number, setNumber] = useState(1);

  const [currentImage, setCurrentImage] = useState(start);

  const [timeInSecond, setInTimeInSecond] = useState(0);
  const [timeInMinutes, setTimeInMinutes] = useState(0);

  const getExerciseDetails = () => {
    api
      .get(`/exercise/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setExerciseDetail(response.data[0]);
          if (response.data[0].duration_type == "minutes") {
            setTimeInMinutes(response.data[0].duration);
          } else {
            setInTimeInSecond(response.data[0].duration);
          }
        } else {
          console.log("Error getting exercise details");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getExerciseDetails();
  }, []);

  const handleClickPrevious = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const handleClickNext = () => {
    if (number < 3) {
      setNumber(number + 1);
    }
  };

  const handleClick = () => {
    if (currentImage === start) {
      setCurrentImage(stop);
    }
    if (currentImage === stop) {
      setCurrentImage(start);
    }
  };

  return (
    <div className="exercise-details">
      <NavbarDesktop />
      <div className="exercise-detail-top">
        <Link to="/user-profile">
          <ProfilePicture />
        </Link>
        <ExitPage />
      </div>

      <div className="exercise-detail-page">
        <h4 className="exercise-detail-title">
          {exerciseDetail.exercise_name}
        </h4>
        <img
          className="image-exercise-detail"
          src={exerciseDetail.image}
          alt=""
        />
        <p>Set {number}/ 3</p>
        <div>
          {timeInMinutes}:{timeInSecond}
        </div>
        <div>
          <img onClick={handleClickPrevious} src={previous} alt="" />

          <img onClick={handleClick} src={currentImage} alt="" />

          <img onClick={handleClickNext} src={next} alt="" />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default ExerciseDetailPage;
