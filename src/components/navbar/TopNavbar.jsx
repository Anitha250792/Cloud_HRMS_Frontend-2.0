import "./TopNavbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function TopNavbar() {

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [notifications, setNotifications] =
    useState([
      "New leave request submitted",
      "Payroll generated successfully",
      "Attendance updated",
    ]);

  const userName =
    localStorage.getItem("userName") ||
    "Sarah Johnson";

  const userRole =
    localStorage.getItem("userRole") ||
    "HR Manager";

  const handleNotificationClick = () => {

    setShowNotifications(!showNotifications);

    if (!showNotifications) {
      setNotifications([]);
    }
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