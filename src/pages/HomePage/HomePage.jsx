import "./HomePage.css";
import UserName from "../../components/UserName/UserName";
import Navbar from "../../components/navbar/Navbar";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { homePageData } from "../../assets/HomePage/HomePageData";
import HomePageImage from "../../components/Image";
import Description from "../../components/Desciption";
import Title from "../../components/Title";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import Card from "../../components/Card/Card";
import { useContext, useEffect, useState } from "react";
import api from "../../api/api";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const id = 1;

  const { user } = useContext(UserContext);

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
          console.log("Error getting courses suggestions");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="homepage">
      <NavbarDesktop />
      <div className="user-profile-icon">
      <Link to={'/user-profile'}>
        <ProfilePicture image={user.picture}/>
        </Link>
      </div>
      <div>
        <UserName value={user.username}/>
      </div>
      <div className="homepage-img">
        <HomePageImage data={homePageData.find((data) => data.id === id)} />
      </div>
      <div className="homepage-subtitle1">
      <Title title="Let's start basic" weight={"light-title"} />
      </div>

      <div className="homepage-subtitle2">
      <Title title="yoga and meditation" weight={"bold-title"} />
      </div>
      <div>
        <div className="homepage-recommended-courses">
          <Description data={homePageData.find((data) => data.id === id)} />
        </div>
      </div>
      <div className="homepage-courses-card">
        
        {courses && courses.length > 0 ? (
          courses.slice(0,2).map((course) => (
              <Card
              key={course.id}
              data={course}
              linkTo="courses"
              numberLessons={numberLessons} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <Navbar />
      
    </div>
  );
};

export default HomePage;
