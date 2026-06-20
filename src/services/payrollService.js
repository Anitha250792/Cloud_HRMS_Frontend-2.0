import api from "./api";

const API_URL = "/payroll";

// ALL PAYROLLS
export const getPayrolls = () =>
  api.get(`${API_URL}/`);

// MY PAYROLLS
export const getMyPayrolls = () =>
  api.get(`${API_URL}/my/`);

// PAYROLL SUMMARY
export const getPayrollSummary = () =>
  api.get(`${API_URL}/summary/`);

// CHART DATA
export const getPayrollStats = () =>
  api.get(`${API_URL}/stats/`);

// GENERATE MONTHLY PAYROLL
export const generatePayroll = (
  month,
  year
) =>
  api.post(
    `${API_URL}/generate-all/`,
    {
      month,
      year,
    }
  );

// EMPLOYEE PAYSLIPS
export const getEmployeePayslips = (
  employeeId
) =>
  api.get(
    `${API_URL}/employee/${employeeId}/`
  );

// DOWNLOAD PAYSLIP
export const downloadPayslip = (
  payrollId
) =>
  window.open(
    `https://cloud-hrms-1.onrender.com/api/payroll/download/${payrollId}/`,
    "_blank"
  );

// EMAIL PAYSLIP
export const emailPayslip = (
  payrollId
) =>
  api.post(
    `${API_URL}/email/${payrollId}/`
  );