
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"
import Navbar from "../../components/navbar/Navbar"
import ArrowButton from "../../components/ArrowButton/ArrowButton"
import "./CourseFavourite.css"
import { Link } from "react-router-dom"
import { useState } from "react"


const CourseFavouritePage = () => {

  const [favCourses,setFavCourses] = useState([]);

  return (
    <div className='favourite-page'>
    <div className='favourite-top'>
    <ProfilePicture/>
    <Link to="/courses"><ArrowButton/></Link>
    </div>
    <div><h1 className="favourite-title">Favourite Courses</h1></div>
    <div className="favourite-container">
   
    <div className='left-and-right'>
        <div className="left">
        <img className="yoga-pose" src="/src/assets/images/Yogapilates.svg" alt="" />
        </div>
        <div className="right">
        <div className="title">
            <h2 className='course-name'>Yoga pilates</h2>
            <h3 className='number-of-lessons'>5 lesson</h3>
        </div>
        
        <div className="bottom">
        <p>By Sarah Williams</p>
        <img className="dot-image" src="/src/assets/images/dot-image.svg" alt="dot" />
        <p>all level</p>
        <img className="dot-image" src="/src/assets/images/dot-image.svg" alt="dot" />
       
        <img src="/src/assets/images/small-star.svg" alt="" />
      
        <p>4.5</p>
          </div>
          
        </div>
    </div>
    <div className="img-star">
    <img src="/src/assets/images/add-favourite.svg" alt="" />
    </div>
    </div>

    <div className="favourite-container">
    
    <div className='left-and-right'>
        <div className="left">
        <img className="yoga-pose" src="/src/assets/images/Yogapilates.svg" alt="" />
        </div>
        <div className="right">
        <div className="title">
            <h2 className='course-name'>Yoga pilates</h2>
            <h3 className='number-of-lessons'>5 lesson</h3>
        </div>
        <div className="bottom">
        <p>By Sarah Williams</p>
        <img className="dot-image" src="/src/assets/images/dot-image.svg" alt="dot" />
        <p>all level</p>
        <img className="dot-image" src="/src/assets/images/dot-image.svg" alt="dot" />
        <img src="/src/assets/images/small-star.svg" alt="" />
        <p>4.5</p>
          </div>
        </div>
    </div>
    <div className="img-star">
    <img src="/src/assets/images/add-favourite.svg" alt="" />
    </div>
    </div>
    
    
    <Navbar/>
</div>
  )
}

export default CourseFavouritePage