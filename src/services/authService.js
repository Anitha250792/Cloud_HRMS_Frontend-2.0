import axios from "axios";

const API_URL =
  "https://cloud-hrms-1.onrender.com/api/auth";

export const loginUser = async (
  credentials
) => {

  const response = await axios.post(
    `${API_URL}/login/`,
    credentials,
    {
      withCredentials: true,
    }
  );

  const data = response.data;

  localStorage.setItem(
    "userRole",
    data.role
  );

  localStorage.setItem(
    "userName",
    data.user.name
  );

  localStorage.setItem(
    "userEmail",
    data.user.email
  );

  localStorage.setItem(
    "userId",
    data.user.id
  );

  return data;
};

export const logoutUser = () => {

  localStorage.removeItem(
    "userRole"
  );

  localStorage.removeItem(
    "userName"
  );

  localStorage.removeItem(
    "userEmail"
  );

  localStorage.removeItem(
    "userId"
  );

};