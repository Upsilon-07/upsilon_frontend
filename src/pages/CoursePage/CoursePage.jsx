import { useContext } from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import Card from "../../components/Card/Card";
import StarButton from "../../components/StarButton/StarButton";
import TitleCard from "../../components/TitleCard/TitleCard";
import "./CoursePage.css";
import UserContext from "../../contexts/UserContext";
// import starImage from "/src/assets/images/star-button.svg";
import CoursesContext from "../../contexts/CoursesContext";

const CoursePage = () => {
 
  const { user } = useContext(UserContext);
  const { courses, numberLessons } = useContext(CoursesContext);


  return (
    <div className="course-page">
      {/* <ProfilePicture btnToFavouritePage={starImage} /> */}
      <div className="top">
        <Link to="/user-profile">
          <ProfilePicture image={user.picture} />
        </Link>
        <Link to="/favourites/courses">
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
    </div>
  );
};

export default CoursePage;
