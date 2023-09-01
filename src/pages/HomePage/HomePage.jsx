import "./HomePage.css";
import { Link } from "react-router-dom";
import UserName from "../../components/UserName/UserName";
import Navbar from "../../components/navbar/Navbar";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { homePageData } from "../../assets/HomePage/HomePageData";
import Title from "../../components/Title";
import HomePageImage from "../../components/Image";
import Description from "../../components/Desciption";
import { homePageBold } from "../../assets/HomePage/HomePageBold";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
//import Card from "/src/components/Card/Card.jsx"

const HomePage = () => {
  const id = 1;
  return (
    <div className="homepage">
      <div className="user-profile-icon">
        <ProfilePicture />
      </div>
      <div>
        <UserName />
      </div>
      <div className="homepage-img">
        <HomePageImage data={homePageData.find((data) => data.id === id)} />
      </div>
      <div className="homepage-subtitle1">
        <Title data={homePageData.find((data) => data.id === id)} />
      </div>

      <div className="homepage-subtitle2">
        <Title data={homePageBold.find((data) => data.id === id)} />
      </div>
      <div>
        <div className="homepage-recommended-courses">
          <Description data={homePageData.find((data) => data.id === id)} />
        </div>
      </div>
      <div className="homepage-recommended-courses-box-info">
        <Link className="card-link" to="/courses">
          
        </Link>
      </div>

      <Navbar />
      <NavbarDesktop/>
    </div>
  );
};

export default HomePage;
