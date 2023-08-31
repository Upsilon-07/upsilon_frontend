import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import { Link, useParams } from "react-router-dom";
import api from "../../api/api";
import "./CourseLesson.css";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import TitleCard from "../../components/TitleCard/TitleCard";
import favouriteStar from "../../assets/images/blank-star.svg";

const CourseLessonPage = () => {
  const { id } = useParams();

  const [lessons, setLessons] = useState();
  const [courseTitle, setCourseTitle] = useState();

  const getAllLessonsByCourseId = () => {
    api
      .get(`/courses/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setLessons(response.data.lessons);
          setCourseTitle(response.data.courseTitle[0].courseName);
        } else {
          console.log("Error getting all lessons");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllLessonsByCourseId();
  }, []);

  console.log(courseTitle);
  return (
    <div className="lessons-page">
      <div className="lessons-top">
        <ProfilePicture />
        <Link to="/courses">
          <ArrowButton />
        </Link>
      </div>

      {id && courseTitle ? (
        <TitleCard id={id} title={courseTitle} source={favouriteStar} />
      ) : null}

      {lessons && lessons.length > 0 ? (
        lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="card-link"
            to={`/courses/${lesson.id}`}
          >
            <Card data={lesson} />
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      <Navbar />
    </div>
  );
};

export default CourseLessonPage;
