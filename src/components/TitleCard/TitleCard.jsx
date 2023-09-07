import PropTypes from "prop-types";
import api from "../../api/api";
import { useState } from "react";
// import { useContext } from "react";
// import UserContext from "../../contexts/UserContext";
import "./TitleCard.css";
import favouriteImg from "../../assets/images/star 1.svg";

const TitleCard = ({ id, title, source }) => {
  // const { } = useContext(UserContext);

  const [img, setImg] = useState(source);

  const favourite = () => {
    //! post in api to:

    if (img === source) {
      setImg(favouriteImg);
    }
    if (img !== source) {
      setImg(source);
    }

    const data = {
      //! change the user_id with the id from the userContext
      user_id: 1,
      course_id: Number(id),
    };
    api
      .post("/favourites/courses", data)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="title-card">
      <h1 className="title-courses">{title}</h1>
      {source ? (
        <img onClick={favourite} src={img} alt="start to add to favourites" />
      ) : null}
    </div>
  );
};

TitleCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  source: PropTypes.string,
  width: PropTypes.string,
};

export default TitleCard;
