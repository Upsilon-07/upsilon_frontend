import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import Navbar from "../../components/navbar/Navbar";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
// import Card from "../../components/Card/Card";
// import TitleCard from "../../components/TitleCard/TitleCard";
import { Link } from "react-router-dom";
import api from "../../api/api";
import Card from "../../components/Card/Card";
import line from "../../assets/images/Line 14.png";
import clock from "../../assets/images/time.svg";
import vector from "../../assets/images/Vector.png";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./LessonDetails.css";

const LessonDetailsPage = () => {
  const { id } = useParams();

  const [exercises, setExercises] = useState([]);

  const [lessonInfo, setLessonInfo] = useState([]);

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
      <NavbarDesktop />
      <div className="lesson-detail-top">
        <Link to="/user-profile">
          <ProfilePicture />
        </Link>

        <Link to={`/courses/${lessonInfo.course_id}`}>
          <ArrowButton />
        </Link>
      </div>
      <div className="card-lesson-detail">
        <div className="card-lesson-card">
          <p className="card-lesson-title">{lessonInfo.lesson_name}</p>
          <img className="card-lesson-image" src={lessonInfo.image} alt="" />
        </div>

        <div className="card-clock-and-time">
          <img src={clock} alt="clock of duration" />{" "}
          <h4>Duration: {lessonInfo.duration} mins</h4>
          <img src={vector} className="vector" />
          <h4>Type: {lessonInfo.lesson_type}</h4>
          <h4>{lessonInfo.description}</h4>
        </div>

        <img src={line} />

        {exercises && exercises.length > 0 ? (
          exercises.map((exercise) => (
            // <Link key={lesson.id} to={`/lesson/${lesson.id}`}>
            <Card key={exercise.id} data={exercise} linkTo="exercise" />
            // </Link>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default LessonDetailsPage;
