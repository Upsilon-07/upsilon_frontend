import "./HomePage.css";
import UserName from "../../components/UserName/UserName";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { homePageData } from "../../assets/HomePage/HomePageData";
import HomePageImage from "../../components/Image";
import Description from "../../components/Desciption";
import Card from "../../components/Card/Card";
import { useContext } from "react";
// import api from "../../api/api";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import CoursesContext from "../../contexts/CoursesContext";

const HomePage = () => {
  const id = 1;

  const { user } = useContext(UserContext);
  const { courses, numberLessons } = useContext(CoursesContext);

  return (
    <div className="homepage">
      <div className="home-page-header">
        <div className="home-welcome">
          <UserName value={user.username} />
        </div>
        <div className="home-page-user-profile">
          <Link to="/user-profile">
            <ProfilePicture image={user.picture} />
          </Link>
        </div>
      </div>
      <div className="homepage-img">
        <HomePageImage data={homePageData.find((data) => data.id === id)} />
      </div>
      <div className="homepage-subtitles">
        <div className="homepage-subtitle1">
          <h2 id="subtitle-home-one">Lets start basic</h2>
        </div>
        <div className="homepage-subtitle2">
          <h2>yoga and meditation</h2>
        </div>
      </div>
      <div className="homepage-recommended-courses">
        <Description data={homePageData.find((data) => data.id === id)} />
      </div>
      <div className="homepage-recommended-courses-list">
        <div className="homepage-courses-card">
          {courses && courses.length > 0 ? (
            courses
              .slice(0, 2)
              .map((course) => (
                <Card
                  key={course.id}
                  data={course}
                  linkTo="courses"
                  numberLessons={numberLessons}
                />
              ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
