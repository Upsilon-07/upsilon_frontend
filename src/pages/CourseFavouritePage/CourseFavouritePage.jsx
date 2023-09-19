import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
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

  const getAllFavouriteCourseByUser = () => {
    api
      .get(`favourites/courses?userId=${user.id}`)
      .then((response) => {
        if (response.status === 200) {
          setFavouriteCourses(response.data);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllFavouriteCourseByUser();
  }, []);

  return (
    <div className="favourite-page">
      <div className="favourite-top">
        <ProfilePicture image={user.picture} />
        <Link to="/courses">
          <ArrowButton />
        </Link>
      </div>
      <TitleCard title="Favourites Courses" />

      {
        favouriteCourses && favouriteCourses.length > 0
          ? favouriteCourses.map((favouriteCourse) => (
              <Card
                key={favouriteCourse.id}
                data={favouriteCourse}
                linkTo="courses"
              />
            ))
          : null
        // <h1 className="loading">Add your favourite courses...</h1>
      }
    </div>
  );
};

export default CourseFavouritePage;
