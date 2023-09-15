
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Link } from "react-router-dom";
import api from "../../api/api";
import Card from "../../components/Card/Card";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./LessonDetails.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import UserContext from "../../contexts/UserContext";

const LessonDetailsPage = () => {
  const { id } = useParams();

  const [exercises, setExercises] = useState({});
  const { user } = useContext(UserContext);

  const [lessonInfo, setLessonInfo] = useState({});

  const getAllLessonDetails = () => {
    api
      .get(`/lesson/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setExercises(response.data.exercises);
          setLessonInfo(response.data.lessonInfo[0]);
        } else {
          console.log("Error getting lesson details");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllLessonDetails();
  }, []);
  return (
    <div className="lesson-details">
      <div className="lesson-detail-top">
        <Link to="/user-profile">
          <ProfilePicture image={user.picture} />
        </Link>

        <ArrowButton />
      </div>
      <div className="card-lesson-detail">
        <InfoCard data={lessonInfo} />

        {exercises && exercises.length > 0 ? (
          exercises.map((exercise) => (
            <Card key={exercise.id} data={exercise} linkTo="exercise" />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default LessonDetailsPage;
