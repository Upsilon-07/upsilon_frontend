import MealsPageIcon from "../../components/MealsPageIcon/mealsPageIcon";
import "./MealsPage.css";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import StarButton from "../../components/StarButton/StarButton";
import Title from "../../components/Title";
import Card from "../../components/Card/Card";
import api from "../../api/api";

const MealsPage = () => {
  const { user } = useContext(UserContext);
  const [meals, setMeals] = useState([]);
  const [currentMealType, setCurrentMealType] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const getAllMeals = () => {
    api
      .get("/meals")
      .then((response) => {
        if (response.status === 200) {
          setMeals(response.data);
        }
      })
      .catch((error) => console.error(error));
  };

  const determineCurrentMealType = () => {
    const currentHour = currentTime.getHours();
    if (currentHour >= 5 && currentHour <= 9) {
      return "Breakfast";
    } else if (currentHour >= 12 && currentHour <= 15) {
      return "Lunch";
    } else if (currentHour >= 18 && currentHour <= 21) {
      return "Dinner";
    } else {
      return "Snack";
    }
  };

  useEffect(() => {
    getAllMeals();
    setCurrentMealType(determineCurrentMealType());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the current time every second

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div className="meals-page">
      <div className="meals-page-profile-pic-star-button">
      <Link to="/user-profile">
        <ProfilePicture image={user.picture} />
      </Link>
      <Link to="/favourites/meals">
      <StarButton />
      </Link>
      </div>
      <div className="meals-page-img">
        <MealsPageIcon />
      </div>
      <div className="meals-page-title-container">
        <Title
          title={
            {
              Breakfast: "Breakfast time!",
              Lunch: "Lunch time!",
              Dinner: "Dinner time!",
              Snack: "Snack time!",
            }[currentMealType]
          }
          weight="bold-title"
        />
        <div className="meals-page-subtitle">
        <Title 
          title={`Fuel your day with these healthy ${currentMealType} recipes`}
          weight="light-title"
        /></div>
      </div>
      <div className="meals-page-cards">
        {meals
          .filter((meal) => meal.meal_type === currentMealType)
          .map((meal) => (
            <Card
              key={meal.id}
              data={meal}
              linkTo="meals"
            />
          ))}
      </div>
    </div>
  );
};

export default MealsPage;
