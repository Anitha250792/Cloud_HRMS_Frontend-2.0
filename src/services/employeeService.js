import axios from "axios";

const API_URL =
  "http://127.0.0.1:8000/api/employees";


// GET ALL EMPLOYEES

export const getEmployees = async () => {

  return axios.get(
    `${API_URL}/`
  );

};


// GET SINGLE EMPLOYEE

export const getEmployee = async (id) => {

  return axios.get(
    `${API_URL}/${id}/`
  );

};


// CREATE EMPLOYEE

export const createEmployee = async (
  employeeData
) => {

  return axios.post(
    `${API_URL}/create/`,
    employeeData
  );

};


// UPDATE EMPLOYEE

export const updateEmployee = async (
  id,
  employeeData
) => {

  return axios.put(
    `${API_URL}/update/${id}/`,
    employeeData
  );

};


// DELETE EMPLOYEE

export const deleteEmployee = async (
  id
) => {

  return axios.delete(
    `${API_URL}/delete/${id}/`
  );

};