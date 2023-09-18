/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from 'js-cookie';
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api/api";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      api
        .get("/user", config)
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data);
            if(location.pathname === "/" || location.pathname.includes("start-journey")){
              navigate("/")
            } else {
              navigate(location.pathname)
            }
          }
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node (React element)
};

export default UserContext;

export { UserContextProvider };
