import "./NavbarDesktop.css";
import { Link, useLocation } from "react-router-dom";
import profileButtonGrey from "/src/assets/images/navbar/profile_page_button_grey.svg";
import profileButtonOrange from "/src/assets/images/navbar/profile_page_button_orange.svg";
import homepageButtonGrey from "/src/assets/images/navbar/home_button_grey.svg";
import homepageButtonOrange from "/src/assets/images/navbar/home_button_orange.svg";
import coursesButtonGrey from "/src/assets/images/navbar/courses_button_grey.svg";
import coursesButtonOrange from "/src/assets/images/navbar/courses_button_orange.svg";
import relaxingMusicButtonGrey from "/src/assets/images/navbar/relaxing_music_button_grey.svg";
import relaxingMusicButtonOrange from "/src/assets/images/navbar/relaxing_music_button_orange.svg";
import mealsButtonGrey from "/src/assets/images/navbar/meals_button_grey.svg";
import mealsButtonOrange from "/src/assets/images/navbar/meals_button_orange.svg";
import logo from "/src/assets/images/NavbarDesktop/logo_upsilon.svg"

const NavbarDesktop = () => {
  const location = useLocation();

  return (
    <nav className="navbar-desktop">
      <ul className="navbar-container-desktop">
        <img className="navbar-logo-desktop" src={logo} />
        <div className="navbar-icons-desktop">
        <Link to="/">
          <img
            src={
              location.pathname === "/"
                ? homepageButtonOrange
                : homepageButtonGrey
            }
            alt="button to go to homepage"
          />
        </Link>
        <Link to="/courses">
          <img
            src={
              location.pathname.includes("/courses")
                ? coursesButtonOrange
                : coursesButtonGrey
            }
            alt="button to go to courses page"
          />
        </Link>
        <Link to="/relaxing-music">
          <img
            src={
              location.pathname.includes("/relaxing-music")
                ? relaxingMusicButtonOrange
                : relaxingMusicButtonGrey
            }
            alt="button to go to relaxing music page"
          />
        </Link>
        <Link to="/meals">
          <img
            src={
              location.pathname.includes("/meals")
                ? mealsButtonOrange
                : mealsButtonGrey
            }
            alt="button to go to meals page"
          />
        </Link>
        <Link to="/user-profile">
          <img
            src={
              location.pathname.includes("/user-profile")
                ? profileButtonOrange
                : profileButtonGrey
            }
            alt="button to go to user profile"
          />
        </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
