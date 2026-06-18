import { useEffect, useState } from "react";
import { getEmployees } from "../../../services/employeeService";

function RecentEmployees() {

  const [employees, setEmployees] =
    useState([]);

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    try {

      const response =
        await getEmployees();

      setEmployees(
        response.data.slice(0,5)
      );

    } catch(error){

      console.log(error);

    }

  };

  return (

    <div
      style={{
        background:"#fff",
        padding:"24px",
        borderRadius:"16px",
        marginTop:"25px",
      }}
    >

      <h2>
        Recent Employees
      </h2>

      <table
        style={{
          width:"100%",
          marginTop:"20px",
        }}
      >

        <thead>

          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((emp)=>(

            <tr key={emp.id}>

              <td>{emp.emp_code}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RecentEmployees;