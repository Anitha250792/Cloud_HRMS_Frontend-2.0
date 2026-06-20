import "./TopNavbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { getPendingLeaves } from "../../services/leaveService";

function TopNavbar() {

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [notifications, setNotifications] =
    useState([]);

  const userName =
    localStorage.getItem("userName") ||
    "Admin";

  const userRole =
    localStorage.getItem("userRole") ||
    "HR";

  useEffect(() => {

    loadNotifications();

  }, []);

  const loadNotifications = async () => {

    try {

      const res =
        await getPendingLeaves();

      const notificationList =
        res.data.map((leave) => {

          return `${leave.employee_name || "Employee"} applied for ${leave.leave_type} leave`;

        });

      setNotifications(notificationList);

    } catch (error) {

      console.log(
        "Notification Error",
        error
      );

    }

  };

  const handleNotificationClick = () => {

    setShowNotifications(
      !showNotifications
    );

  };
  return (

    <div className="topbar">

      <div className="search-box">

        <SearchIcon />

        <input
          type="text"
          placeholder="Search Employees..."
        />

      </div>

      <div className="profile-section">

        <div
          className="notification-btn"
          onClick={handleNotificationClick}
        >

          <NotificationsIcon />

          {notifications.length > 0 && (
            <span className="notification-count">
              {notifications.length}
            </span>
          )}

        </div>

        {showNotifications && (

          <div className="notification-dropdown">

            <h4>Notifications</h4>

            {notifications.length === 0 ? (
              <p>No new notifications</p>
            ) : (
              notifications.map((item, index) => (
                <p key={index}>{item}</p>
              ))
            )}

          </div>

        )}

        <div className="profile">

          <div className="avatar">

            {userName
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase()}

          </div>

          <div className="profile-info">

            <h4>{userName}</h4>

            <p>{userRole}</p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default TopNavbar;