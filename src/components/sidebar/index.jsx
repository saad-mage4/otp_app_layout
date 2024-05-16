import { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const SideBar = () => {
  const [active, setActive] = useState("");

  const colorPalette = (e) => {
    e.preventDefault();
    setActive("active");
    if (active == "active") {
      setActive("");
    }
  };

  const colorBlack = (e) => {
    e.preventDefault();
    document.documentElement.style.setProperty("--primary-color", "#000");
    setActive("");
  };
  const colorRed = (e) => {
    e.preventDefault();
    document.documentElement.style.setProperty("--primary-color", "#c20000");
    setActive("");
  };
  const colorGreen = (e) => {
    e.preventDefault();
    document.documentElement.style.setProperty("--primary-color", "#217c00");
    setActive("");
  };
  const colorPurple = (e) => {
    e.preventDefault();
    document.documentElement.style.setProperty("--primary-color", "#6957e9");
    setActive("");
  };

  return (
    <>
      <div className="sidebar_wrapper">
        <div className="site_logo">
          <i className="fab fa-discord"></i>
        </div>
        <ul className="tabs-links">
          <li>
            <Link
              to="/"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Dashboard"
              data-tooltip-offset={31}
            >
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/configuration"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Configuration"
              data-tooltip-offset={32}
            >
              <i className="fas fa-gear"></i>
            </Link>
          </li>
          <li>
            <a
              href="#!"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Logs & Manual"
              data-tooltip-offset={35}
            >
              <i className="fas fa-file-lines"></i>
            </a>
          </li>
          <li>
            <a
              href="#!"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Unlimited Emails"
              data-tooltip-offset={32}
            >
              <i className="fas fa-inbox"></i>
            </a>
          </li>
          <li>
            <a
              href="#!"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Address Correction"
              data-tooltip-offset={32}
            >
              <i className="fas fa-address-book"></i>
            </a>
          </li>
        </ul>
        <ul className="tabs-links app-settings">
          <li>
            <a
              href="#!"
              id="color-palette"
              className={`${active}`}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Color Palette"
              data-tooltip-offset={32}
              onClick={colorPalette}
            >
              <i className="fas fa-palette"></i>
            </a>
            <div className="colors-box">
              <a href="#!" onClick={colorBlack}>
                <i className="fas fa-circle black"></i>
              </a>
              <a href="#!" onClick={colorRed}>
                <i className="fas fa-circle red"></i>
              </a>
              <a href="#!" onClick={colorGreen}>
                <i className="fas fa-circle green"></i>
              </a>
              <a href="#!" onClick={colorPurple}>
                <i className="fas fa-circle purple"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Tooltip
        id="my-tooltip"
        style={{ backgroundColor: "#6957e9", color: "#fff" }}
      />
    </>
  );
};

export default SideBar;
