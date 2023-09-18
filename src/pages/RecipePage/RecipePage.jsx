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
import NutrientsCircle from "../../components/NutrientsCircle/NutrientsCircle";
// import NutritionInfo from '../../components/NutritionInfo/NutritionInfo';

const RecipePage = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const [isFavouriteMeal, setIsFavouriteMeal] = useState(false);

  const [meal, setMeal] = useState({});
  const [nutrition, setNutrition] = useState([]);

  const getMealDetails = useCallback(() => {
    let data = {
      userId: user.id,
    };
    api
      .post(`/meals/${id}`, data)
      .then((response) => {
        if (response.status === 200) {
          setMeal(response.data.meal);
          console.log(response.data.isFavouriteMeal);
          setIsFavouriteMeal(response.data.isFavouriteMeal);
          // console.log(response.data[0]);
        } else {
          console.log("Error getting meal");
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  // useEffect(() => {
  //   getMealDetails();
  // }, [getMealDetails]);

  const getNutritionDetails = useCallback(() => {
    api
      .get(`/nutrition/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setNutrition(response.data);
        } else {
          console.log("Error getting nutrition");
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  // useEffect(() => {
  //   getNutritionDetails();
  // }, [getNutritionDetails]);

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

  useEffect(() => {
    getMealDetails();
    getNutritionDetails();
  }, [getMealDetails, getNutritionDetails]);

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
          <NutrientsCircle data={nutrition} />
          {/* <NutritionInfo data={nutrition} /> */}
          <IngredientsCard data={meal} />
        </div>
      </div>

      {isFavouriteMeal === false ? (
        <div className="center-btn">
          <button className="btn-recipe" onClick={addToFavourite}>
            Add to favourite
          </button>
        </div>
      ) : (
        <div className="center-btn">
          <button className="btn-recipe" onClick={addToFavourite}>
            Remove from favourite
          </button>
        </div>
      )}
      <Navbar />
    </div>
  );
};

export default RecipePage;
