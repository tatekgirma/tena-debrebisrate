import React from "react";
import "./Header.scss";

import Heropic from "../../assets/Image.png";
function Header() {
  return (
    <div className="Header">
      <h1>
        THe Emahus <strong>Walk </strong>
      </h1>
      <img src={Heropic} alt="" width="200" />
    </div>
  );
}

export default Header;
