import { useState, useEffect } from 'react';
import "./mealsPageIcon.css";
import breakfastImg from "../../assets/images/mealsPageIcon/breakfast-img.jpg";
import lunchImg from "../../assets/images/mealsPageIcon/lunch-img.svg";
import dinnerImg from "../../assets/images/mealsPageIcon/dinner-img.jpg";
import snackImg from "../../assets/images/mealsPageIcon/snack-img.jpg"



const MealsPageIcon = () => {

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

    if (currentHour >= 5 && currentHour <= 9) {
      return (
        <>
          <img src={breakfastImg} alt="Breakfast plate image" className='meals-page-img'/>
        </>
      );
    } else if (currentHour >= 12 && currentHour <= 15) {
      return (
        <>
          <img src={lunchImg} alt="Lunch plate image" className='meals-page-img'/>
        </>
      );
    } else if (currentHour >= 18 && currentHour <= 21) {
      return (
        <>
          <img src={dinnerImg} alt="Dinner plate image" className='meals-page-img'/>
        </>
      );
    } else {
      return (
        <>
          <img src={snackImg} alt="Snack plate image" className='meals-page-img'/>
        </>
      );
    }
  };


  return (
    <div className="meal-page-icon">
      {renderContent()}
    </div>
  )
}


export default MealsPageIcon
