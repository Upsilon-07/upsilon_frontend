import "./HomePage.css";
import UserName from "../../components/UserName/UserName";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { homePageData } from "../../assets/HomePage/HomePageData";
import HomePageImage from "../../components/Image";
import Description from "../../components/Desciption";
import Title from "../../components/Title";
import Card from "../../components/Card/Card";
import { useContext} from "react";
// import api from "../../api/api";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import CoursesContext from "../../contexts/CoursesContext";

const HomePage = () => {
  const id = 1;

  const { user } = useContext(UserContext);
  const { courses, numberLessons } = useContext(CoursesContext);

  // const [courses, setCourses] = useState({});
  // const [numberLessons, setNumberLessons] = useState([]);

  // const getAllCourses = () => {
  //   api
  //     .get("/courses")
  //     .then((response) => {
  //       if (response.status === 200) {
  //         // console.log(response);
  //         setCourses(response.data.courses);
  //         setNumberLessons(response.data.numberLessons);
  //       } else {
  //         console.log("Error getting courses suggestions");
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   getAllCourses();
  // }, []);

  return (
    <div className="homepage">
      <Link to="/user-profile">
        <ProfilePicture image={user.picture} />
      </Link>
      <div>
        <UserName value={user.username} />
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
        {courses ? (
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
  );
};

export default HomePage;
