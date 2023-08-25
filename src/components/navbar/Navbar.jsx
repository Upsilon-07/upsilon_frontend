import './Navbar.css'
import profileButtonGrey from '/src/assets/images/navbar/profile_page_button_grey.svg'
import homepageButtonGrey from '/src/assets/images/navbar/home_button_grey.svg'
import coursesButtonGrey from '/src/assets/images/navbar/courses_button_grey.svg'
import relaxingMusicButtonGrey from '/src/assets/images/navbar/relaxing_music_button_grey.svg'
import mealsButtonGrey from '/src/assets/images/navbar/meals_button_grey.svg'


const Navbar = () => {
  return (
    <div>
        <img src={homepageButtonGrey} alt=""/>
        <img src={coursesButtonGrey} alt=""/>
        <img src={relaxingMusicButtonGrey} alt=""/>
        <img src={mealsButtonGrey} alt=""/>
        <img src={profileButtonGrey} alt=""/>
    </div>
  )
}

export default Navbar
