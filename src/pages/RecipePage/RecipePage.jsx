import "./RecipePage.css";
import Navbar from "../../components/navbar/Navbar";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext, useState, useEffect, useCallback } from "react";
import api from "../../api/api";
import InfoCard from "../../components/InfoCard/InfoCard";
import { useParams } from "react-router-dom";
import "../../components/InfoCard/InfoCard";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import IngredientsCard from "../../components/IngredientsCard/IngredientsCard";
import NutritionInfo from "../../components/NutritionInfo/NutritionInfo";
// import NextButton from "../../components/next-page-button/NextButton";

const RecipePage = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const [isFavouriteMeal, setIsFavouriteMeal] = useState(false);

  const [meal, setMeal] = useState({});

  const getMealDetails = useCallback(() => {
    let data = {
      userId: user.id,
    };
    api
      .post(`/meals/${id}`, data)
      .then((response) => {
        if (response.status === 200) {
          setMeal(response.data.meal);
          setIsFavouriteMeal(response.data.isFavouriteMeal);
          // console.log(response.data[0]);
        } else {
          console.log("Error getting meal");
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getMealDetails();
  }, [getMealDetails]);

  const [nutrition, setNutrition] = useState([]);

  const getNutritionDetails = useCallback(() => {
    api
      .get(`/nutrition/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setNutrition(response.data);
          //   console.log(nutrition);
        } else {
          console.log("Error getting meal");
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getNutritionDetails();
  }, [getNutritionDetails]);

  const addToFavourite = () => {
    const data = {
      user_id: user.id,
      meal_id: Number(id),
    };
    api
      .post(`favourites/meals`, data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setIsFavouriteMeal(!isFavouriteMeal);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <NavbarDesktop />
      <Link to="/user-profile">
        <ProfilePicture image={user.picture} />
      </Link>
      <ArrowButton />
      <div className="card-lesson-detail" id="recipe-page-card">
        <InfoCard data={meal} />
        <div className="nutrition-container">
          <NutritionInfo data={nutrition} />
          <IngredientsCard data={meal} />
        </div>
      </div>
      {isFavouriteMeal ? (
        <button className="btn-recipe" onClick={addToFavourite}>
          Remove from favourite
        </button>
      ) : (
        <button className="btn-recipe" onClick={addToFavourite}>
          Add to favourites
        </button>
      )}

      {/* <button className="btn-recipe" onClick={addToFavourite}>
        {isFavouriteMeal ? "Add to favourites" : "Remove from favourites"}
      </button> */}
      <Navbar />
    </div>
  );
};

export default RecipePage;
