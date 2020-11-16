import Footer from "../Footer/Footer";
import NameNav from "../Nav/NameNav";

const CreateUser = () => {
  return (
    <div className="main-panel">
      <div className="content">
        <div className="container-fluid ">
          {/* // content */}
          <NameNav name={"Create user"} />
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Create user</h4>
                  <p className="card-category">Enter infomation</p>
                </div>
                <div className="card-body">
                  <form>
                    {/* row */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">Username</label>
                          <input type="text" className="form-control"></input>
                        </div>
                      </div>
                    </div>
                    {/* row */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">Password</label>
                          <input type="text" className="form-control"></input>
                        </div>
                      </div>
                    </div>
                    {/* row */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Full name
                          </label>
                          <input type="text" className="form-control"></input>
                        </div>
                      </div>
                    </div>
                    {/* row */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">Email</label>
                          <input type="text" className="form-control"></input>
                        </div>
                      </div>
                    </div>
                    {/* row */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Phone number
                          </label>
                          <input type="text" className="form-control"></input>
                        </div>
                      </div>
                    </div>
                    {/* row */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Balance default
                          </label>
                          <input type="text" className="form-control"></input>
                        </div>
                      </div>
                    </div>
                    {/* button  */}
                    <button
                      type="submit"
                      className="btn btn-primary pull-right"
                    >
                      Create New User
                    </button>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateUser;
