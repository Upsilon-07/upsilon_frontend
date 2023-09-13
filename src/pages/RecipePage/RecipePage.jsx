import './RecipePage.css'
import Navbar from "../../components/navbar/Navbar";
import NavbarDesktop from "../../components/NavbarDesktop/NavbarDesktop";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext, useState, useEffect, useCallback } from "react";
import api from '../../api/api';
import InfoCard from '../../components/InfoCard/InfoCard';
import { useParams } from "react-router-dom";
import "../../components/InfoCard/InfoCard";
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import IngredientsCard from '../../components/IngredientsCard/IngredientsCard';


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
  
    return (
      <div>
        <NavbarDesktop />
        <Link to="/user-profile">
          <ProfilePicture image={user.picture} />
        </Link>
        <ArrowButton />
        <div className="card-lesson-detail">
          <InfoCard data={meal} />
          <IngredientsCard data={meal}/>
        </div>
        <Navbar />
      </div>
    );
  };

export default RecipePage
