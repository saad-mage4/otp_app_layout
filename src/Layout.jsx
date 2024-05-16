const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="message-box">
          <p>
            You are on trial period, Activate the paid plan to not miss any COD
            Verifications!
          </p>
          <a href="#!">Recharge Now</a>
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
