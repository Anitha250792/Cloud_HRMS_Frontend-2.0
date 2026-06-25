import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./EmployeeLogin.css";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginUser }
from "../../services/authService";

import employeeImage
from "../../assets/images/employee-login.jpg";

function EmployeeLogin() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] =
    useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    try {

      const response =
        await loginUser(form);

      if (
        response.role !==
        "EMPLOYEE"
      ) {

        setError(
          "This account is not Employee"
        );

        localStorage.clear();

        return;
      }

      navigate(
        "/employee-dashboard"
      );

    }

    catch (error) {

      setError(
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

            <p>
              HR Payroll System
            </p>

          </div>

          <h2>
            Employee Login
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

          <form
            onSubmit={handleLogin}
          >

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="employee@company.com"
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

            <button
              type="submit"
            >
              Sign In
            </button>

          </form>

          <div className="auth-links">

            <Link
              to="/forgot-password"
            >
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