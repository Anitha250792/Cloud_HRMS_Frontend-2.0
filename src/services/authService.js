import axios from "axios";

const API_URL =
  "https://cloud-hrms-1.onrender.com/api/auth";

export const loginUser = async (
  credentials
) => {

  const response =
    await axios.post(
      `${API_URL}/login/`,
      credentials
    );

  const data =
    response.data;

  localStorage.setItem(
    "accessToken",
    data.access
  );

  localStorage.setItem(
    "refreshToken",
    data.refresh
  );

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

  return data;
};