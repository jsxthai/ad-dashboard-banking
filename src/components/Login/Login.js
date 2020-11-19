import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../actions/login";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const stateLogin = useSelector((state) => state.login);

  const handleChange = (e) => {
    const value = e.target.value;
    setLoginData({
      ...loginData,
      [e.target.name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(postLogin(loginData));
  };

  useEffect(() => {
    // I have token in local store
    dispatch({ type: "CHECK_LOGIN" });
    // check token is valid, (để sau)
  }, []);

  return (
    <div className="content ">
      <div style={{ marginTop: "10%" }}></div>
      <div className="container-fluid ">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Login</h4>
                <p className="card-category">Enter infomation</p>
              </div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  {/* row */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="bmd-label-floating">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          value={loginData.username}
                          onChange={handleChange}
                        ></input>
                      </div>
                    </div>
                  </div>
                  {/* row */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="bmd-label-floating">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={loginData.password}
                          onChange={handleChange}
                        ></input>
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
