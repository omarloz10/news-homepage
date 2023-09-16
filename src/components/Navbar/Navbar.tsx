import "./NavbarStyle.css";
import Logo from "../../assets/images/logo.svg";
import OpenMenuIcon from "../../assets/images/icon-menu.svg";
import CloseMenuIcon from "../../assets/images/icon-menu-close.svg";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setisActive] = useState(false);

  const changeActive = () => {
    setisActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="navbar__nav">
        <ul className={`navbar__nav-list ${isActive && "show"}`}>
          <img
            src={CloseMenuIcon}
            alt=""
            className="navbar__close-icon"
            onClick={changeActive}
          />
          <li className="navbar__nav-link">Home</li>
          <li className="navbar__nav-link">New</li>
          <li className="navbar__nav-link">Popular</li>
          <li className="navbar__nav-link">Trending</li>
          <li className="navbar__nav-link">Categories</li>
        </ul>
      </div>

      <div className="navbar__open-icon">
        <img src={OpenMenuIcon} alt="Open menu icon" onClick={changeActive} />
      </div>
    </nav>
  );
}
