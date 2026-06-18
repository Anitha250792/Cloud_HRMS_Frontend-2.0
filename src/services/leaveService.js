import axios from "axios";

const API_URL =
  "http://127.0.0.1:8000/api/leave";

export const applyLeave = (data) =>
  axios.post(
    `${API_URL}/apply/`,
    data
  );

export const getMyLeaves = () =>
  axios.get(
    `${API_URL}/my/`
  );

export const getLeaveBalance = () =>
  axios.get(
    `${API_URL}/balance/`
  );

export const getPendingLeaves = () =>
  axios.get(
    `${API_URL}/pending/`
  );

export const approveLeave = (id) =>
  axios.post(
    `${API_URL}/${id}/approve/`
  );

export const rejectLeave = (id) =>
  axios.post(
    `${API_URL}/${id}/reject/`
  );