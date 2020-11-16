const Dashboard = () => {
  return (
    <div>
      <div className="wrapper ">
        <div
          className="sidebar"
          data-color="azure"
          data-background-color="black"
          data-image=""
        >
          <div className="logo">
            <a href="1" className="simple-text logo-normal">
              EMPLOYEE
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="nav-item active  ">
                <a className="nav-link" href="./dashboard.html">
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./user.html">
                  <i className="material-icons">payment</i>
                  <p>Pay In User</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./tables.html">
                  <i className="material-icons">history</i>
                  <p>History User</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./typography.html">
                  <i className="material-icons">person_add</i>
                  <p>Create User</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <a className="navbar-brand" href="/">
                  Dashboard
                </a>
              </div>
            </div>
            <div className="collapse navbar-collapse justify-content-end">
              <p>User1</p>
            </div>
          </nav>
          {/* End Navbar */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">person</i>
                      </div>
                      <p className="card-category">Pay in</p>
                      <h3 className="card-title">+23.056.200</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">date_range</i> Last 24
                        Hours
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">info_outline</i>
                      </div>
                      <p className="card-category">Fixed Issues</p>
                      <h3 className="card-title">75</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">local_offer</i> Tracked
                        from Github
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                      <div className="card-icon">
                        <i className="fa fa-twitter" />
                      </div>
                      <p className="card-category">Total User</p>
                      <h3 className="card-title">+336.232</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">update</i> Just Updated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid">
              <div className="copyright float-right">2020 - copyright</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
