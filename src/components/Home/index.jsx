const Boxes = () => {
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
    </>
  );
};
export default Boxes;
