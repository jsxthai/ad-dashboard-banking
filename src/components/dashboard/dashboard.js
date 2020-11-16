// import Nav from "../nav/Nav";
// import Payin from "../payin/Payin";

import Footer from "../Footer/Footer";
import NameNav from "../Nav/NameNav";

const Dashboard = () => {
  return (
    <>
      <div className="main-panel">
        <NameNav name={"Dashboard"} />
        <div className="content">
          <div className="container-fluid">
            {/* // content */}

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
                      <i className="material-icons">date_range</i> Last 24 Hours
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
                      <i className="material-icons">local_offer</i> Tracked from
                      Github
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
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
