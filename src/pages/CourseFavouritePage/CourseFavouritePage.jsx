import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import Navbar from "../../components/navbar/Navbar";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useState, useEffect, useContext } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import api from "../../api/api";
import UserContext from "../../contexts/UserContext";
import "./CourseFavourite.css";

const CourseFavouritePage = () => {
  const { user } = useContext(UserContext);
  const [favouriteCourses, setFavouriteCourses] = useState();

  //console.log(user);

  const getAllFavouriteCourseByUser = () => {
    api
      .get(`favourites/courses?userId=${user.id}`)
      .then((response) => {
        //console.log(response.data);
        if (response.status === 200) {
          setFavouriteCourses(response.data);
        } else {
          console.log("Error getting all favourites");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllFavouriteCourseByUser();
  }, []);

  return (
    <div className="favourite-page">
      <div className="favourite-top">
        <ProfilePicture />
        <Link to="/courses">
          <ArrowButton />
        </Link>
      </div>
      <TitleCard title="Favourite Courses" />
      {favouriteCourses && favouriteCourses.length > 0 ? (
        favouriteCourses.map((favouriteCourse) => (
          <Card
            key={favouriteCourse.id}
            data={favouriteCourse}
            linkTo="courses"
          />
        ))
      ) : (
        <h1 className="loading">Add favourite courses...</h1>
      )}

      <Navbar />
    </div>
  );
};

export default CourseFavouritePage;
