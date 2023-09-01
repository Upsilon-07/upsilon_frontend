import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import Card from "../../components/Card/Card";
import StarButton from "../../components/StarButton/StarButton";
import Navbar from "../../components/navbar/Navbar";
import "./CoursePage.css";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [numberLessons, setNumberLessons] = useState([]);

  const getAllCourses = () => {
    api
      .get("/courses")
      .then((response) => {
        if (response.status === 200) {
          console.log(response)
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
      <div className="top">
        <ProfilePicture />
        <Link to="/courses/favourite">
          <StarButton />
        </Link>
      </div>
      <h1 className="title-courses">Courses</h1>
      {courses && courses.length > 0 ? (
        courses.map((course) => (
          <Link
            key={course.id}
            className="card-link"
            to={`/courses/${course.id}`}
          >
            <Card data={course} numberLessons={numberLessons} />
          </Link>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      <Navbar />
    </div>
  );
};

export default CoursePage;
