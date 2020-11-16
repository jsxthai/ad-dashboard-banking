import { useState } from "react";

const Login = () => {
  const [state, setState] = useState({});

  return (
    <div className="content ">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-fluid ">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Login</h4>
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

                  {/* button  */}
                  <button type="submit" className="btn btn-primary pull-right">
                    Login
                  </button>
                  <div className="clearfix"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
