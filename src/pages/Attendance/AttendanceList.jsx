import {
  useEffect,
  useState
} from "react";

import AdminLayout from "../../layouts/AdminLayout";

import {
  getAttendanceRecords
} from "../../services/attendanceService";

import "./AttendanceList.css";

function AttendanceList() {

  const [records,
    setRecords] =
    useState([]);

  useEffect(() => {

    fetchAttendance();

  }, []);

  const fetchAttendance =
    async () => {

      try {

        const response =
          await getAttendanceRecords();

        setRecords(
          response.data
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <AdminLayout>

      <div className="attendance-page">

        <h1>
          Attendance Management
        </h1>

        <div
          className="attendance-card"
        >

          <h2>
            Attendance Records
          </h2>

          <table>

            <thead>

              <tr>
                <th>Date</th>
                <th>Employee</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Hours</th>
                <th>Late</th>
                <th>Half Day</th>
              </tr>

            </thead>

            <tbody>

              {records.map(
                (record) => (

                  <tr
                    key={record.id}
                  >

                    <td>
                      {record.date}
                    </td>

                    <td>
  {record.employee}
</td>

                    <td>
                      {
                        record.check_in
                          ?
                          new Date(
                            record.check_in
                          ).toLocaleTimeString()
                          :
                          "-"
                      }
                    </td>

                    <td>
                      {
                        record.check_out
                          ?
                          new Date(
                            record.check_out
                          ).toLocaleTimeString()
                          :
                          "-"
                      }
                    </td>

                    <td>
                      {
                        record.working_hours
                      }
                    </td>

                    <td>
                      {
                        record.is_late
                          ? "Yes"
                          : "No"
                      }
                    </td>

                    <td>
                      {
                        record.is_half_day
                          ? "Yes"
                          : "No"
                      }
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );
}

export default AttendanceList;