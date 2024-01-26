import React from "react";
import "./index.scss";
import battery from "../../assets/battery.jpg";

function SideBar() {
  return (
    <div className="SideBarContainer">
      <img
        src={battery}
        alt="battery"
        style={{ width: "100px", height: "auto" }}
      />

      <button className="SideBarButton">ALL PRODUCTS</button>
    </div>
  );
}

export default SideBar;
