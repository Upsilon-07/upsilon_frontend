import { useEffect, useState } from "react"
import './UserName.css'
import PropTypes from 'prop-types';
import api from "../../api/api";

const UserName = ({ userId }) => {
   const [user, setUser] = useState(null);

   useEffect(() => {
      api
        .get(`/users/${userId}`)
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            setUser(response.data.username);
          } else {
            console.log("Error getting the username");
          }
        })
        .catch((error) => {
          console.error('Error fetching the user', error);
        });
    }, [userId]);
   

  return (
    <>
    <div>
        <h1 className="homepage-title1">Namaste,</h1>
        </div>
    <div className="homepage-title2">
      {user ? (
        <h2 className="username-display">{user.username}</h2>) : (<p>Loading user data...</p>)}
    </div>
    </>
  );
};

UserName.PropTypes = {
  userId: PropTypes.shape,
  data: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }),
  userName: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }),
};


export default UserName


