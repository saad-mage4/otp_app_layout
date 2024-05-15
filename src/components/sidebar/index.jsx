import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const SideBar = () => {
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
      </div>
      <Tooltip
        id="my-tooltip"
        style={{ backgroundColor: "#6957e9", color: "#fff" }}
      />
    </>
  );
};

export default SideBar;
