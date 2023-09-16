import Navbar from "../../components/navbar/Navbar";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Link } from "react-router-dom";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import api from "../../api/api";
import clock from "../../assets/images/time.svg";
import TitleCard from "../../components/TitleCard/TitleCard";

const MyMeals = () => {
  const { user } = useContext(UserContext);
  const [favouriteMeals, setFavouriteMeals] = useState();

  const getAllFavouriteMealsByUser = () => {
    api
      .get(`favourites/meals?userId=${user.id}`)
      .then((response) => {
        // console.log(response.data);
        if (response.status === 200) {
          setFavouriteMeals(response.data);
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
      {favouriteMeals && favouriteMeals.length > 0 ? (
        favouriteMeals.map((favouriteMeal) => (
          <div key={favouriteMeal.id} className="course-container">
            <div className="left-and-right-container">
              {favouriteMeal.image ? (
                <div className="left-container">
                  <img className="yoga-pose" src={favouriteMeal.image} alt="" />
                </div>
              ) : null}
              <div className="right-container">
                <div className="title">
                  {favouriteMeal.meal_name ? (
                    <h2 className="course-name">{favouriteMeal.meal_name}</h2>
                  ) : null}

                  {favouriteMeal.duration ? (
                    <div className="clock-and-time">
                      <img src={clock} alt="clock of duration" />{" "}
                      <h4>{favouriteMeal.duration} mins</h4>
                    </div>
                  ) : null}
                </div>
                <div className="bottom-container"></div>
              </div>
            </div>
          </div>

          // <Card key={favouriteMeal.id} data={favouriteMeal} />
        ))
      ) : (
        <h1 className="loading">Add your favourite meals...</h1>
      )}

      <Navbar />
    </div>
  );
};

export default MyMeals;
