import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import profileButtonGrey from '/src/assets/images/navbar/profile_page_button_grey.svg'
import homepageButtonGrey from '/src/assets/images/navbar/home_button_grey.svg'
import homepageButtonOrange from '/src/assets/images/navbar/home_button_orange.svg'
import coursesButtonGrey from '/src/assets/images/navbar/courses_button_grey.svg'
import relaxingMusicButtonGrey from '/src/assets/images/navbar/relaxing_music_button_grey.svg'
import mealsButtonGrey from '/src/assets/images/navbar/meals_button_grey.svg'


const Navbar = () => {

const location = useLocation()

  return (
    <nav className='navbar'>
    <ul className='navbar-container'>
        <Link to='/'>
        <img src={location.pathname === "/" ? homepageButtonOrange : homepageButtonGrey} alt="button to go to homepage" /></Link> 
        <img src={location.pathname.includes('/courses') ? homepageButtonOrange : coursesButtonGrey} alt="button to go to courses page"/>
        <img src={relaxingMusicButtonGrey} alt="button to go to relaxing music page"/>
        <img src={mealsButtonGrey} alt="button to go to meals page"/>
        <img src={profileButtonGrey} alt="button to go to user profile"/>
    </ul>
    </nav>
  )
}

export default Navbar
