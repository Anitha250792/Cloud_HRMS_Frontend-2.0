import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/authService";
import "./AdminLogin.css";

import adminImage from "../../assets/images/admin-login.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function AdminLogin() {



  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    try {

      const response =
        await loginUser(form);

      if (
        response.role !== "HR"
      ) {

        setError(
          "This account is not HR"
        );

        localStorage.clear();

        return;
      }

      navigate("/dashboard");

    }

    catch (error) {

      setError(
        error.response?.data?.detail ||
        "Invalid Credentials"
      );

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-form">

          <div className="logo-box">
            <h1>PayFlow</h1>
            <p>HR Payroll System</p>
          </div>

          <h2>
            Sign in to your Account
          </h2>

          {error && (
            <p
              style={{
                color: "red",
                marginBottom: "15px",
              }}
            >
              {error}
            </p>
          )}

          <form onSubmit={handleLogin}>

            <label>
              Admin Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="admin@company.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>

<div className="password-box">

  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Enter Password"
    value={form.password}
    onChange={handleChange}
    required
  />

<button
  type="button"
  className="toggle-password"
  onClick={() =>
    setShowPassword(!showPassword)
  }
>
  {showPassword ? (
    <VisibilityOffIcon fontSize="small" />
  ) : (
    <VisibilityIcon fontSize="small" />
  )}
</button>

</div>

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