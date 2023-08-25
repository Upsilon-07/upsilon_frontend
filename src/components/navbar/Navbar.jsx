import './Navbar.css'
import { Link } from 'react-router-dom'
import profileButtonGrey from '/src/assets/images/navbar/profile_page_button_grey.svg'
import homepageButtonGrey from '/src/assets/images/navbar/home_button_grey.svg'
import coursesButtonGrey from '/src/assets/images/navbar/courses_button_grey.svg'
import relaxingMusicButtonGrey from '/src/assets/images/navbar/relaxing_music_button_grey.svg'
import mealsButtonGrey from '/src/assets/images/navbar/meals_button_grey.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar-container'>
        <Link to='/'>
        <img src={homepageButtonGrey} alt="button to go to homepage" /></Link> 
        <img src={coursesButtonGrey} alt="button to go to courses page"/>
        <img src={relaxingMusicButtonGrey} alt="button to go to relaxing music page"/>
        <img src={mealsButtonGrey} alt="button to go to meals page"/>
        <img src={profileButtonGrey} alt="button to go to user profile"/>
    </div>
    </div>
  )
}

export default Navbar
