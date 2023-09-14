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

const MyMeals = () => {
  const { user } = useContext(UserContext);
  const [favouriteMeals, setFavouriteMeals] = useState();

  const getAllFavouriteMealsByUser = () => {
    api
      .get(`favourites/meals?userId=${user.id}`)
      .then((response) => {
        //console.log(response.data[0]);
        if (response.status === 200) {
          setFavouriteMeals(response.data[0]);
        } else {
          console.log("Error getting all favourites");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllFavouriteMealsByUser();
  }, []);
  return (
    <div>
      <NavbarDesktop />
      <Link to="/user-profile">
        <ProfilePicture image={user.picture} />
      </Link>
      <ArrowButton />
      <TitleCard title="Favourite Meals" />

      {favouriteMeals && favouriteMeals.length !== 0 ? (
        <Card key={favouriteMeals.id} data={favouriteMeals} linkTo="courses" />
      ) : (
        <h1 className="loading">Add your favourite meals...</h1>
      )}

      <Navbar />
    </div>
  );
};

export default MyMeals;
