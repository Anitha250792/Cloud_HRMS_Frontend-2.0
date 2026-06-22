import api from "./api";

export const getEmployees = () =>
  api.get("/employees/");

export const getEmployee = (id) =>
  api.get(`/employees/${id}/`);

export const createEmployee = (employeeData) =>
  api.post(
    "/employees/create/",
    employeeData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

export const updateEmployee = (
  id,
  employeeData
) =>
  api.put(
    `/employees/update/${id}/`,
    employeeData
  );

export const deleteEmployee = (id) =>
  api.delete(
    `/employees/delete/${id}/`
  );