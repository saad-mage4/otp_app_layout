/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MiniToggle } from "../ui";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Home = () => {
  const [check_v, setVerification] = useState("");
  const [check_a, setAbandoned] = useState("");
  const [check_s, setShipment] = useState("");

  // const options = {
  //   maintainAspectRatio : true
  // }

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
          <MiniToggle
            checkStateS={checkStateV}
            enable="order-enb-dis"
            auto="order-auto"
          />
        </div>
        {/* container 2 */}
        <div className={`abandoned-cart ${check_a}`}>
          <h3>Abandoned Cart</h3>
          <MiniToggle
            checkStateS={checkStateA}
            enable="abandoned-enb-dis"
            auto="abandoned-auto"
          />
        </div>
        {/* container 3 */}
        <div className={`order-shipment ${check_s}`}>
          <h3>Order Shipment</h3>
          <MiniToggle
            checkStateS={checkStateS}
            enable="shipment-enb-dis"
            auto="shipment-auto"
          />
        </div>
      </div>
      <div className="graph-container">
        <Bar
          data={{
            labels: [
              "May-20",
              "May-21",
              "May-22",
              "May-23",
              "May-24",
              "May-25",
              "May-26",
            ],
            datasets: [
              {
                label: "Calls",
                data: [100, 50, 200],
                borderColor: "#36A2EB",
                backgroundColor: "#9BD0F5",
              },
              {
                label: "Messages",
                data: [80, 100, 250],
              },
              {
                label: "Emails",
                data: [100, 200, 100],
                borderColor: "#FF6384",
                backgroundColor: "#FFB1C1",
              },
            ],
          }}
        />
      </div>
    </>
  );
};
export default Home;
