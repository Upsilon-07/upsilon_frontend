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

  useEffect(() => {
    // Fetch meals by meal type when the component mounts
    getAllMeals();

    const currentHour = new Date().getHours();
    let mealType;

    if (currentHour >= 5 && currentHour <= 9) {
      mealType = "Breakfast";
    } else if (currentHour >= 12 && currentHour <= 15) {
      mealType = "Lunch";
    } else if (currentHour >= 18 && currentHour <= 21) {
      mealType = "Dinner";
    } else {
      mealType = "Snack";
    }

    setCurrentMealType(mealType);
  }, []);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the current time every second

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  const getCurrentHour = () => {
    return currentTime.getHours();
  };

  const renderContent = () => {
    const currentHour = getCurrentHour();
    const filteredMeals = meals.filter(
      (meal) => meal.meal_type === currentMealType
    );

    if (currentHour >= 5 && currentHour <= 9) {
      return (
        <>
          {" "}
          <div>
            <Title title="Breakfast time!" weight={"bold-title"} />
            <Title
              title="Start your day with these healthy Breakfast recipes"
              weight={"light-title"}
            />
          </div>
          <div>
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} data={meal} />
            ))}
          </div>
        </>
      );
    } else if (currentHour >= 12 && currentHour <= 15) {
      return (
        <>
          {" "}
          <div>
            <Title title="Lunch time!" weight={"bold-title"} />
            <Title
              title="Fuel your day with these healthy Lunch recipes"
              weight={"light-title"}
            />
          </div>
          <div>
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} data={meal} />
            ))}
          </div>
        </>
      );
    } else if (currentHour >= 18 && currentHour <= 21) {
      return (
        <>
          {" "}
          <div>
            <Title title="Dinner time!" weight={"bold-title"} />
            <Title
              title="End your day with these healthy Dinner recipes"
              weight={"light-title"}
            />
          </div>
          <div>
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} data={meal} />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
          {" "}
          <div>
            <Title title="Snack time!" weight={"bold-title"} />
            <Title
              title="Fuel your day with these healthy Snack recipes"
              weight={"light-title"}
            />
          </div>
          <div>
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} data={meal} />
            ))}
          </div>
        </>
      );
    }
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
      <div className="meals-page-title">{renderContent()}</div>
      <Navbar />
    </div>
  );
};

export default MealsPage;
