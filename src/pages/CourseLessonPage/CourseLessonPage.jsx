import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import { Link, useParams } from "react-router-dom";
import api from "../../api/api";
import "./CourseLesson.css";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState, useContext } from "react";
import Card from "../../components/Card/Card";
import TitleCard from "../../components/TitleCard/TitleCard";
// import favouriteStar from "../../assets/images/blank-star.svg";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import UserContext from "../../contexts/UserContext";

const CourseLessonPage = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);

  const [lessons, setLessons] = useState({});
  const [courseTitle, setCourseTitle] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);

  const getAllLessonsByCourseId = () => {
    let data = {
      userId: user.id,
    };
    api
      .post(`/courses/${id}`, data)
      .then((response) => {
        if (response.status === 200) {
          setIsFavourite(response.data.isFavourite);
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

  return (
    <div className="lessons-page">
      <NavbarDesktop />
      <div className="lessons-top">
        <Link to="/user-profile">
          <ProfilePicture image={user.picture} />
        </Link>

        <Link to="/courses">
        <ArrowButton />
        </Link>
      </div>

      {id && courseTitle ? (
        <div className="title-container-lessons">
          <TitleCard
            id={id}
            title={courseTitle}
            isFavourite={isFavourite}
            setIsFavourite={setIsFavourite}
            // source={favouriteStar}
          />
        </div>
      ) : null}

      {lessons && lessons.length > 0 ? (
        lessons.map((lesson) => (
          <Card key={lesson.id} data={lesson} linkTo="lesson" />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      <Navbar />
    </div>
  );
};

export default CourseLessonPage;
