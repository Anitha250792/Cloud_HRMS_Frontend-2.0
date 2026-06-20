import { useEffect }
from "react";

import { useNavigate }
from "react-router-dom";

import {
  logoutUser
}
from "../../services/authService";

function Logout() {

  const navigate =
    useNavigate();

  useEffect(()=>{

    logoutUser();

    navigate("/");

  },[]);

  return null;

}

export default Logout;