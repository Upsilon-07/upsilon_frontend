import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import Navbar from "../../components/navbar/Navbar";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Link, useParams } from "react-router-dom";
import ExitPage from "../../components/ExitPage/ExitPage";
import { useEffect, useState } from "react";
import NextButton from "../../components/next-page-button/NextButton";
import api from "../../api/api";
import "./ExercisePage.css";

const ExercisePage = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});

  const getExerciseDetails = () => {
    api
      .get(`/exercise/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setExerciseDetail(response.data[0]);
        } else {
          console.log("Error getting exercise details");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getExerciseDetails();
  }, []);

  return (
    <div className="exercise-details">
      <NavbarDesktop />
      <div className="exercise-detail-top">
        <Link to="/user-profile">
          <ProfilePicture />
        </Link>
        <ExitPage />
      </div>
      {exerciseDetail ? (
        <div className="exercise-card-content">
          <img src={exerciseDetail.image} className="" alt="" />
          <div className="content">
            <h4>{exerciseDetail.exersie_name}</h4>
            <p>
              Duration: {exerciseDetail.duration} {exerciseDetail.duration_type}
            </p>
            <img
              className="dot-image"
              src="/src/assets/images/dot-image.svg"
              alt="dot"
            />
            <p>Time: slow</p>
            <p>{exerciseDetail.description}</p>
            <NextButton
              buttonId="orange-button"
              buttonContent="Start Journey"
              buttonClass="button-round"
            />
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
      <Navbar />
    </div>
  );
};

export default ExercisePage;
