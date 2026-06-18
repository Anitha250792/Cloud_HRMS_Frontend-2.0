import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    role:"EMPLOYEE"
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Registered Successfully");

    navigate("/admin-login");
  };

  return (
    <div className="login-page">

      <form
        className="login-card"
        onSubmit={handleSubmit}
      >

        <h2>Register</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <select
          name="role"
          onChange={handleChange}
        >
          <option value="HR">HR</option>
          <option value="EMPLOYEE">Employee</option>
        </select>

        <button>
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;