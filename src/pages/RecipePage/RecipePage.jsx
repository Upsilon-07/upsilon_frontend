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
import NextButton from "../../components/next-page-button/NextButton";
// import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';

const RecipePage = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const [meal, setMeal] = useState({});

  const getMealDetails = useCallback(() => {
    api
      .get(`/meals/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setMeal(response.data[0]);
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

  // const [nutrition, setNutrition] = useState([]);

  // const getNutritionDetails = useCallback(() => {
  //     api
  //       .get(`/nutrition/${id}`)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           setNutrition(response.data);
  //         //   console.log(nutrition);

  //         } else {
  //           console.log("Error getting meal");
  //         }
  //       })
  //       .catch((error) => console.log(error));
  //   }, [id]);

  // useEffect(() => {
  //     getNutritionDetails();
  // }, [getNutritionDetails]);

  ////delete///
  const [isFavouriteMeal, setIsFavouriteMeal] = useState(false);
  ////delete//

  //  {/* For favourite meal */}
  const addToFavourite = () => {
    const data = {
      user_id: user.id,
      meal_id: Number(id),
    };
    api
      .post(`favourites/meals`, data)
      .then((response) => {
        if (response.status === 200) {
          setIsFavouriteMeal(!isFavouriteMeal);
        }
      })
      .catch((err) => console.error(err));
  };

  //  {/* {for favourtite meal} */}

  return (
    <div>
      <NavbarDesktop />
      <Link to="/user-profile">
        <ProfilePicture image={user.picture} />
      </Link>
      <ArrowButton />
      <div className="card-lesson-detail">
        <InfoCard data={meal} />
        <div className="doughnut-chart">
          {/* <DoughnutChart data={nutrition} /> */}
        </div>
        <IngredientsCard data={meal} />
      </div>
      {/* {delete} */}
      {isFavouriteMeal === true ? (
        <button onClick={addToFavourite}>Add to favourite</button>
      ) : (
        <button onClick={addToFavourite}>Remove from favourite</button>
      )}

      {/* {delete} */}
      <Navbar />
    </div>
  );
};

export default RecipePage;
