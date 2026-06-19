import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./EmployeeLogin.css";

import employeeImage from "../../assets/images/employee-login.jpg";

function EmployeeLogin() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = (e) => {

    e.preventDefault();

   localStorage.setItem("userRole", "EMPLOYEE");
navigate("/employee-dashboard");
  };

  return (

    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-form">

          <div className="logo-box">
            <h1>PayFlow</h1>
            <p>HR Payroll System</p>
          </div>

          <h2>Employee Login</h2>

          <form onSubmit={handleLogin}>

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="employee@company.com"
              onChange={handleChange}
              required
            />

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />

            <button type="submit">
              Sign In
            </button>

          </form>

          <div className="auth-links">

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

            <Link to="/">
              Back
            </Link>

          </div>

        </div>

        <div className="auth-image">

          <img
            src={employeeImage}
            alt="Employee Login"
          />

        </div>

      </div>

    </div>

  );
}

export default EmployeeLogin;