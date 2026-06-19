import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AdminLogin.css";

import adminImage from "../../assets/images/admin-login.jpg";

function AdminLogin() {

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

    localStorage.setItem(
      "userRole",
      "HR"
    );

    localStorage.setItem("userRole", "HR");
navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-form">

          <div className="logo-box">
            <h1>PayFlow</h1>
            <p>HR Payroll System</p>
          </div>

          <h2>Sign in to your Account</h2>

          <form onSubmit={handleLogin}>

            <label>Admin Email</label>

            <input
              type="email"
              name="email"
              placeholder="admin@company.com"
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
            src={adminImage}
            alt="Admin Login"
          />

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;