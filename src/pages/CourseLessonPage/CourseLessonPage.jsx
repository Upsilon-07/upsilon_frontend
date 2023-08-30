import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"
import ArrowButton from "../../components/ArrowButton/ArrowButton"
import { Link } from "react-router-dom"
import "./CourseLesson.css"
import Navbar from "../../components/navbar/Navbar"

const CourseLessonPage = () => {
  return (
    <div className="lessons-page">
      <div className='lessons-top'>
        <ProfilePicture/>
        <Link to="/courses"><ArrowButton/></Link>
      </div>

      <div className="title-and-star">
        <h1 className="lessons-title">Yoga pilates</h1>
        <img src="/src/assets/images/blank-star.svg" alt="" />
      </div>

      <div className='left-and-right'>
        <div className="left">
          <img className="yoga-pose" src="/src/assets/images/Yogapilates.svg" alt="" />
        </div>
        <div className="right-part">
          <div className="title">
              <h2 className='course-name'>Intro pilates flow</h2>
              <div className="clock-and-time">
              <img className="img-clock" src="/src/assets/images/time.svg" alt="" />
              <h3 className='time-min'>15mins</h3>
              </div>
          </div>
        
          <div className="bottom">
            <p>By Sarah Williams</p>
            <img className="dot-image" src="/src/assets/images/dot-image.svg" alt="dot" />
            <p>Beginner</p>
          </div>
        </div>
      </div>
      <Navbar/>


    </div>


   
  )
}

export default CourseLessonPage