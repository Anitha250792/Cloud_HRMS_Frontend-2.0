import axios from "axios";

const API_URL =
  "http://127.0.0.1:8000/api/attendance";

export const getAttendanceRecords =
  async () => {
    return axios.get(
      `${API_URL}/records/`
    );
  };

export const getAttendanceSummary =
  async () => {
    return axios.get(
      `${API_URL}/summary/`
    );
  };

export const getTodayAttendance =
  async () => {
    return axios.get(
      `${API_URL}/my-today/`
    );
  };

export const checkIn =
  async () => {
    return axios.post(
      `${API_URL}/check-in/`
    );
  };

export const checkOut =
  async () => {
    return axios.post(
      `${API_URL}/check-out/`
    );
  };