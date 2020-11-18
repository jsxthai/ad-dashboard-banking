import { useState } from "react";
import { useDispatch } from "react-redux";
import NameNav from "../Nav/NameNav";
import { createUser } from "../../actions/users";

const CreateUser = () => {
  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    fullname: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setDataUser({
      ...dataUser,
      [e.target.name]: value,
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    dispatch(createUser(dataUser));
    setDataUser({
      username: "",
      password: "",
      email: "",
      phone: "",
      fullname: "",
    });
  };

  return (
    <div className="content">
      <div className="container-fluid ">
        {/* // content */}
        <NameNav name={"Create user"} />
        <div className="row justify-content-center align-items-center">
          <div className="col-md-7">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Create user</h4>
                <p className="card-category">Enter infomation</p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* row */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="bmd-label-floating">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          value={dataUser.username}
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
                          value={dataUser.password}
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
                        <label className="bmd-label-floating">Full name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullname"
                          value={dataUser.fullname}
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
                        <label className="bmd-label-floating">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={dataUser.email}
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
                        <label className="bmd-label-floating">
                          Phone number (10 digit)
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={dataUser.phone}
                          onChange={handleChange}
                          pattern="[0-9]{10}"
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                  {/* button  */}
                  <button type="submit" className="btn btn-primary pull-right">
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
  );
};

export default CreateUser;
