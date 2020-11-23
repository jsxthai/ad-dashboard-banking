import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameNav from "../Nav/NameNav";
import { fetchUsers } from "../../actions/users";
import { fetchTotalUsers } from "../../actions/dashboard";

const Dashboard = () => {
  // use selector -> reducers
  const state = useSelector((state) => state.users);
  const dashboard = useSelector((state) => state.dashboard);

  const [totalUsers, setTotalUsers] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    const startDate = new Date(Date.now()).setHours(0, 0, 0);
    dispatch(fetchUsers(startDate));
  }, [dispatch]);

  //
  useEffect(() => {
    dispatch(fetchTotalUsers());
    setTotalUsers(dashboard.totalUsers);
  }, [dispatch, dashboard]);

  const listUserNew = state.map((user, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>{user.fullname}</td>
      <td className="text-info">{user.accountNumber}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        {new Date(parseInt(user.createAt))
          .toLocaleDateString("en-GB")
          .toString()}
        {" - "}
        {new Date(parseInt(user.createAt))
          .toLocaleTimeString("it-IT")
          .toString()}
      </td>
    </tr>
  ));
  return (
    <>
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
                  <p className="card-category">Total User</p>
                  <h3 className="card-title">{totalUsers} users</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">update</i> Just Updated
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-info card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">info_outline</i>
                  </div>
                  <p className="card-category">Fixed Issues</p>
                  <h3 className="card-title">{0}</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">local_offer</i> Tracked from
                    Github
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* // table */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">List user</h4>
                  <p className="card-category">User was created today</p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Account Number</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Create At</th>
                        </tr>
                      </thead>
                      {/* data  */}
                      <tbody>{listUserNew}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
