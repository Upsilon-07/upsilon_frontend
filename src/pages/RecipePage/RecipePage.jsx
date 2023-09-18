import './RecipePage.css'
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
<<<<<<< HEAD
          setMeal(response.data[0]);
=======
          setMeal(response.data.meal);
          console.log(response.data.isFavouriteMeal);
          setIsFavouriteMeal(response.data.isFavouriteMeal);
          // console.log(response.data[0]);
>>>>>>> b0e5fb32cbe8080e953228fb53e316a9d7c06301
        } else {
          //! What is this??
          console.log("Error getting meal");
        }
      })
      .catch((error) => console.error(error));
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
<<<<<<< HEAD
          //! What is this??
          console.log("Error getting meal");
=======
          console.log("Error getting nutrition");
>>>>>>> b0e5fb32cbe8080e953228fb53e316a9d7c06301
        }
      })
      .catch((error) => console.error(error));
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
    </div>
  );
};

export default RecipePage;
