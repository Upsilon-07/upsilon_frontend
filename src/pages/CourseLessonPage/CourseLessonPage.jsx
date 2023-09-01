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
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";

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
      <NavbarDesktop />
      <div className="lessons-top">
        <ProfilePicture />

        <Link to="/courses">
          <ArrowButton />
        </Link>
      </div>

      {id && courseTitle ? (
        <div className="title-container-lessons">
          <TitleCard id={id} title={courseTitle} source={favouriteStar} />
        </div>
      ) : null}

      {lessons && lessons.length > 0 ? (
        lessons.map((lesson) => (
          <Card key={lesson.id} data={lesson} linkTo="exercises" />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      <Navbar />
    </div>
  );
};

export default CourseLessonPage;
