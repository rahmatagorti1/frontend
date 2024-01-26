import React from "react";
import "./index.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

function NavBar() {
  return (
    <div className="appBarContainer">
      <div className="search-container">
        <SearchIcon className="search-icon" />
      </div>
      <div className="icon-container">
        <NotificationsNoneIcon className="menu-icon" />
      </div>
    </div>
  );
}

export default NavBar;
