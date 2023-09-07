import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import Card from "../../components/Card/Card";
import StarButton from "../../components/StarButton/StarButton";
import Navbar from "../../components/navbar/Navbar";
import TitleCard from "../../components/TitleCard/TitleCard";
import "./CoursePage.css";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [numberLessons, setNumberLessons] = useState([]);

  const getAllCourses = () => {
    api
      .get("/courses")
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setCourses(response.data.courses);
          setNumberLessons(response.data.numberLessons);
        } else {
          console.log("Error getting all courses");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="course-page">
      <NavbarDesktop />
      <div className="top">
        <Link to="/user-profile">
          <ProfilePicture />
        </Link>
        <Link to="/courses/favourite">
          <StarButton />
        </Link>
      </div>
      <div className="courses-container">
        <div className="title-container">
          <TitleCard title="Courses" />
        </div>
        {/* <h1 className="title-courses">Courses</h1> */}
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            // <Link key={course.id} to={`/courses/${course.id}`}>
            <Card
              key={course.id}
              data={course}
              linkTo="courses"
              numberLessons={numberLessons}
            />
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

export default CoursePage;
