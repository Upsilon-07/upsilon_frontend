import "./HomePage.css"
import { Link } from "react-router-dom";
import UserName from "../../components/UserName/UserName";
import Navbar from '../../components/navbar/Navbar';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import CoursesCard from '../../components/CoursesCard/CoursesCard';
import { journeyData } from "../../assets/StartJourneyData";
import JourneyImage from "../../components/Image";
import "/src/components/CoursesCard/CoursesCard.css"

const HomePage = () => {
  const id = 4;
  return (
    <div className="homepage">
      <div className="user-profile-icon">
      < ProfilePicture/>
      </div>
      <div>
        <UserName />
      </div>
      <div className="homepage-img">
      <JourneyImage
            data={journeyData.find((data) => data.id === id)}
          />
      </div>
      <h2 className="homepage-subtitle1">{"Let's start basics"}</h2>
      <h2 className="homepage-subtitle2">yoga and meditation</h2>
      <div >
        <h4 className="homepage-recommended-courses">Recommended Courses</h4></div>
        <div className="homepage-recommended-courses-box-info"><Link className="card-link" to="/courses/lessons"><CoursesCard/></Link></div>
      
      <Navbar/>
    </div>
  );
};

export default HomePage;
