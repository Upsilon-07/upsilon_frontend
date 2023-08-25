import homepageImgs from "../assets/images/homepage_img.png"
import userProfileIcon from "../assets/images/user_profile_icon.png"
import userProfilePic from "../assets/images/user_profile_picture.png"
import yogaPoseCardPic from "../assets/images/yoga-pose-for-card.png"
import UserName from "../components/UserName/UserName"

const HomePage = () => {
  return (
    <div className="homepage">
        <div>
            <img src={userProfileIcon} alt="" className="user-profile-icon"/>
                <div><img src={userProfilePic} alt="" className="user-profile-pic"/></div>
        </div>
      <div><UserName/></div>
      <div className="homepage-img"><img src={homepageImgs} alt=""/></div>
      <h2 className="homepage-subtitle1">{"Let's start basics"}</h2>
      <h2 className="homepage-subtitle2">yoga and meditation</h2>
      <div className="homepage-recommended-courses">
        <h4>Recommended Courses</h4>
      </div>
        <div className="homepage-recommended-courses-box">
            <img src={yogaPoseCardPic} alt="" className="yoga-pose-card-pic"/>
            <div>
            <h5 className="homepage-recommended-courses-box-title">Yoga Pilates</h5>
            <h6 className="homepage-recommended-courses-box-subtitle">5 lessons</h6>
                <div className="homepage-recommended-courses-box-info">
                    <p>By Sarah William</p>
                    <p>All Level</p>
                    <p>4.5</p>
                </div>
                </div>
        </div>
    </div>
  )
}

export default HomePage
