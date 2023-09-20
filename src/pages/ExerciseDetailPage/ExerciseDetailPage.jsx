import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Link } from "react-router-dom";
import ExitPage from "../../components/ExitPage/ExitPage";
import start from "../../assets/images/Exercise/play-button.svg";
import next from "../../assets/images/Exercise/next-set.svg";
import previous from "../../assets/images/Exercise/previous-set.svg";
import stop from "../../assets/images/Exercise/pause-button.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import api from "../../api/api";
import "./ExerciseDetailPage.css";
import UserContext from "../../contexts/UserContext";

const ExerciseDetailPage = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [number, setNumber] = useState(1);

  const [currentImage, setCurrentImage] = useState(start);

  const [timeInSecond, setTimeInSecond] = useState(0);
  const [timeInMinutes, setTimeInMinutes] = useState(0);

  const [timerRunning, setTimerRunning] = useState(false);

  const getExerciseDetails = () => {
    api
      .get(`/exercise/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setExerciseDetail(response.data[0]);
          if (response.data[0].duration_type == "minutes") {
            setTimeInMinutes(response.data[0].duration);
          } else {
            setTimeInSecond(response.data[0].duration);
          }
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getExerciseDetails();
  }, []);

  const handleClickPrevious = () => {
    if (timerRunning == true) {
      setTimerRunning(false);
      setCurrentImage(start);
    }

    if (number > 1) {
      setNumber(number - 1);
      setTimeInSecond(0);
      getExerciseDetails();
    }
  };

  const handleClickNext = () => {
    if (timerRunning == true) {
      setTimerRunning(false);
      setCurrentImage(start);
    }

    if (number < 3) {
      setNumber(number + 1);
      setTimeInSecond(0);
      getExerciseDetails();
    }
  };

  const handleClick = () => {
    if (currentImage === start) {
      setCurrentImage(stop);
      setTimerRunning(true);
    }

    if (currentImage == stop) {
      setCurrentImage(start);
      setTimerRunning(false);
    }
  };
  useEffect(() => {
    let timerInterval;

    if (timerRunning) {
      timerInterval = setInterval(() => {
        if (timeInSecond > 0) {
          setTimeInSecond(timeInSecond - 1);
        } else if (timeInMinutes > 0) {
          setTimeInMinutes(timeInMinutes - 1);
          setTimeInSecond(59);
        } else if (number == 3) {
          setNumber(1);
          getExerciseDetails();
        } else {
          clearInterval(timerInterval);
          setCurrentImage(start);
          setTimerRunning(false);
          handleClickNext();
        }
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [timeInSecond, timeInMinutes, timerRunning]);

  return (
    <div className="exercise-detail">
      <div className="exercise-detail-top">
        <Link to="/user-profile">
          <ProfilePicture image={user.picture} />
        </Link>
        <ExitPage path={`/exercise/${id}`}/>
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
        <p className="sets">Set {number}/ 3</p>
        <div className="timer">
          {timeInMinutes < 10 ? `0${timeInMinutes}` : timeInMinutes}:
          {timeInSecond < 10 ? `0${timeInSecond}` : timeInSecond}
        </div>
        <div className="start-stop-next-previous">
          <img onClick={handleClickPrevious} src={previous} alt="" />

          <img onClick={handleClick} src={currentImage} alt="" />

          <img onClick={handleClickNext} src={next} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailPage;
