import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../actions/login";

const Login = () => {
  const [formState, setFormState] = useState({
    isSubmit: false,
  });
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;

    setLoginData({
      ...loginData,
      [e.target.name]: value,
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    await setFormState({ isSubmit: true });
    await dispatch(postLogin(loginData));
    await setFormState({ isSubmit: false });
  };

  useEffect(() => {
    // I have token in local store
    dispatch({ type: "CHECK_LOGIN" });
    // check token is valid, (để sau)
  }, [dispatch]);

  return (
    <div className="content">
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
                <form onSubmit={handleSubmitLogin}>
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
                          required
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
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                  {/* button  */}
                  <button
                    type="submit"
                    className="btn btn-primary pull-right"
                    disabled={formState.isSubmit}
                  >
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
