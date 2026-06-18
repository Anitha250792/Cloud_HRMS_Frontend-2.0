import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.clear();

    navigate("/");

  };

  return (

    <div className="logout-page">

      <div className="logout-card">

        <h1>
          You have been logged out
        </h1>

        <p>
          Thank you for using PayFlow
        </p>

        <button
          onClick={handleLogout}
        >
          Sign In Again
        </button>

      </div>

    </div>

  );
}

export default Logout;