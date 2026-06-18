import { useNavigate } from "react-router-dom";
import "./RoleSelection.css";

import adminImg from "../../assets/images/admin-login.png";
import employeeImg from "../../assets/images/employee-login.png";

function RoleSelection() {

  const navigate = useNavigate();

  return (

    <div className="role-page">

      <div className="main-card">

        <div className="logo-section">

          <div className="logo-circle">
            🔒
          </div>

          <div>
            <h1>PayFlow</h1>
            <p>HR Payroll System</p>
          </div>

        </div>

        <div className="role-container">

          <div className="login-card">

            <div className="image-box">
              <img
                src={adminImg}
                alt="Admin"
              />
            </div>

            <button
              onClick={() =>
                navigate("/admin-login")
              }
            >
              ADMIN LOGIN
            </button>

          </div>

          <div className="login-card">

            <div className="image-box">
              <img
                src={employeeImg}
                alt="Employee"
              />
            </div>

            <button
              onClick={() =>
                navigate("/employee-login")
              }
            >
              EMPLOYEE LOGIN
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default RoleSelection;