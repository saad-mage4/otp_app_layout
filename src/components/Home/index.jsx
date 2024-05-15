import { useState } from "react";

const Boxes = () => {
  const [check_v, setVerification] = useState("");
  const [check_a, setAbandoned] = useState("");
  const [check_s, setShipment] = useState("");

  const checkStateV = (e) => {
    if (e.target.checked) {
      setVerification("active");
    } else {
      setVerification("");
    }
  };

  const checkStateA = (e) => {
    if (e.target.checked) {
      setAbandoned("active");
    } else {
      setAbandoned("");
    }
  };

  const checkStateS = (e) => {
    if (e.target.checked) {
      setShipment("active");
    } else {
      setShipment("");
    }
  };

  return (
    <>
      <div className="grid-boxes" style={{ "--boxWidth": `${280}px` }}>
        <div className="box">
          <div className="content">
            <div className="left">
              <div className="icon">
                <i className="fas fa-dollar"></i>
              </div>
              <h3>Total Orders</h3>
              <span>30</span>
            </div>
            <div className="right">
              <span className="days-count">Last 15 Days</span>
              <a className="view-report" href="#!">
                View Reports <i className="fas fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="left">
              <div className="icon">
                <i className="fas fa-check"></i>
              </div>
              <h3>Confirmed Orders</h3>
              <span>30</span>
            </div>
            <div className="right">
              <span className="days-count">Last 30 Days</span>
              <a className="view-report" href="#!">
                View Reports <i className="fas fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="left">
              <div className="icon">
                <i className="fas fa-xmark"></i>
              </div>
              <h3>Canceled Orders</h3>
              <span>30</span>
            </div>
            <div className="right">
              <span className="days-count">Last 30 Days</span>
              <a className="view-report" href="#!">
                View Reports <i className="fas fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="left">
              <div className="icon">
                <i className="fas fa-warning"></i>
              </div>
              <h3>Pending Orders</h3>
              <span>30</span>
            </div>
            <div className="right">
              <span className="days-count">Last 30 Days</span>
              <a className="view-report" href="#!">
                View Reports <i className="fas fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="toggle-buttons">
        {/* container 1 */}
        <div className={`order-varification ${check_v}`}>
          <h3>Order Varification</h3>
          <div className="toggles">
            <div className="toggle">
              <span className="switch">
                <input
                  onChange={checkStateV}
                  id="order-enb-dis"
                  type="checkbox"
                />
                <label htmlFor="order-enb-dis"></label>
              </span>
            </div>
            <div className="toggle">
              <span className="switch">
                <input id="order-auto" type="checkbox" />
                <label htmlFor="order-auto"></label>
              </span>
            </div>
          </div>
        </div>
        {/* container 2 */}
        <div className={`abandoned-cart ${check_a}`}>
          <h3>Abandoned Cart</h3>
          <div className="toggles">
            <div className="toggle">
              <span className="switch">
                <input
                  onChange={checkStateA}
                  id="abandoned-enb-dis"
                  type="checkbox"
                />
                <label htmlFor="abandoned-enb-dis"></label>
              </span>
            </div>
            <div className="toggle">
              <span className="switch">
                <input id="abandoned-auto" type="checkbox" />
                <label htmlFor="abandoned-auto"></label>
              </span>
            </div>
          </div>
        </div>
        {/* container 3 */}
        <div className={`order-shipment ${check_s}`}>
          <h3>Order Shipment</h3>
          <div className="toggles">
            <div className="toggle">
              <span className="switch">
                <input
                  onChange={checkStateS}
                  id="shipment-enb-dis"
                  type="checkbox"
                />
                <label htmlFor="shipment-enb-dis"></label>
              </span>
            </div>
            <div className="toggle">
              <span className="switch">
                <input id="shipment-auto" type="checkbox" />
                <label htmlFor="shipment-auto"></label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Boxes;
