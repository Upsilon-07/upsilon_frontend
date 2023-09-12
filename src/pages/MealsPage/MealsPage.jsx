import MealsPageIcon from "../../components/MealsPageIcon/mealsPageIcon";
import "./MealsPage.css";
import Navbar from "../../components/navbar/Navbar";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import StarButton from "../../components/StarButton/StarButton";
import Title from "../../components/Title";
import MealCard from "../../components/MealCard/MealCard";
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
        } else {
          console.log("Error getting all meals");
        }
      })
      .catch((error) => console.log(error));
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

  const mealsDisplay = () => {
    const filteredMeals = meals.filter(
      (meal) => meal.meal_type === currentMealType
    );

    const mealTypeTitles = {
      Breakfast: "Breakfast time!",
      Lunch: "Lunch time!",
      Dinner: "Dinner time!",
      Snack: "Snack time!",
    };

    return (
      <>
        <div className="meals-page-title-container">
          <Title title={mealTypeTitles[currentMealType]} weight="bold-title" />
          <Title
            title={`Fuel your day with these healthy ${currentMealType} recipes`}
            weight="light-title"
          />
        </div>
        <div className="meals-page-cards">
          {filteredMeals.map((meal) => (
              <MealCard key={meal.id} data={meal} />
          ))}
        </div>
      </>
    );
  };
  
  return (
      <div>
      <NavbarDesktop />
      <Link to="/user-profile">
        <ProfilePicture image={user.picture} />
      </Link>
      <StarButton />
      <div className="meals-page-img">
        <MealsPageIcon />
      </div>
      <div className="meals-page-title">{mealsDisplay()}</div>
      <Navbar />
    </div>
  );
};

export default MealsPage;
