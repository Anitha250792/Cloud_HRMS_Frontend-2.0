import "./TopNavbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function TopNavbar() {

  const [showNotifications, setShowNotifications] =
    useState(false);

  const userName =
    localStorage.getItem("userName") ||
    "Admin User";

  const userRole =
    localStorage.getItem("userRole") ||
    "Administrator";

  const notifications = [
    "New leave request submitted",
    "Payroll generated successfully",
    "Attendance updated",
  ];

  return (

    <div className="topbar">

      <div className="search-box">

        <SearchIcon />

        <input
          type="text"
          placeholder="Search..."
        />

      </div>

      <div className="profile-section">

        <div
          className="notification-btn"
          onClick={() =>
            setShowNotifications(
              !showNotifications
            )
          }
        >

          <NotificationsIcon />

          <span className="notification-count">
            {notifications.length}
          </span>

        </div>

        {showNotifications && (

          <div className="notification-dropdown">

            <h4>Notifications</h4>

            {notifications.map(
              (item, index) => (
                <p key={index}>
                  {item}
                </p>
              )
            )}

          </div>

        )}

        <div className="profile">

          <div className="avatar">
            {userName
              .split(" ")
              .map(word => word[0])
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