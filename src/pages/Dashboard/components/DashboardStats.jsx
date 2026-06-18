import { useEffect, useState } from "react";
import StatCard from "../../../components/cards/StatCard";
import { getEmployees } from "../../../services/employeeService";

function DashboardStats() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    try {

      const response =
        await getEmployees();

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const totalEmployees =
    employees.length;

  const activeEmployees =
    employees.length;

  const departments =
    [...new Set(
      employees.map(
        emp => emp.department
      )
    )].length;

  const payrollCount =
    employees.filter(
      emp => Number(emp.salary) > 0
    ).length;

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
      }}
    >

      <StatCard
        title="Employees on Payroll"
        value={totalEmployees}
        subtitle="Total Employees"
        status="Active"
      />

      <StatCard
        title="Departments"
        value={departments}
        subtitle="Active Departments"
        status="Updated"
      />

      <StatCard
        title="Payroll Records"
        value={payrollCount}
        subtitle="Salary Configured"
        status="On Track"
      />

      <StatCard
        title="Active Employees"
        value={activeEmployees}
        subtitle="Currently Working"
        status="Updated"
      />

    </div>

  );
}

export default DashboardStats;