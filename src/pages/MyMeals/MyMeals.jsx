import Navbar from "../../components/navbar/Navbar";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Link } from "react-router-dom";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import api from "../../api/api";
import Card from "../../components/Card/Card";
import TitleCard from "../../components/TitleCard/TitleCard";
import "./MyMeals.css";

const MyMeals = () => {
  const { user } = useContext(UserContext);
  const [favouriteMeals, setFavouriteMeals] = useState();

  const getAllFavouriteMealsByUser = () => {
    api
      .get(`favourites/meals?userId=${user.id}`)
      .then((response) => {
        if (response.status === 200) {
          setFavouriteMeals(response.data);
        } else {
          //! What is this??
          console.log("Error getting all favourites");
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllFavouriteMealsByUser();
  }, []);
  return (
    <div className="mymeals-page">
      <NavbarDesktop />
      <div className="top">
        <Link to="/user-profile">
          <ProfilePicture image={user.picture} />
        </Link>
        <ArrowButton />
      </div>
      <div className="mymeals-content">
        <TitleCard title="My Meals" />

        {
          favouriteMeals && favouriteMeals.length > 0
            ? favouriteMeals.map((favouriteMeal) => (
                <Card
                  key={favouriteMeal.id}
                  data={favouriteMeal}
                  linkTo="recipes"
                />
              ))
            : null
          // <h1 className="loading">Add your favourite meals...</h1>
        }
      </div>
      <Navbar />
    </div>
  );
};

export default MyMeals;
