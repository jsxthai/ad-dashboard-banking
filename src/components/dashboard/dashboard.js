import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameNav from "../Nav/NameNav";
import { fetchUsers } from "../../actions/users";

const Dashboard = () => {
  // use selector -> reducers
  const state = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const listUserNew = state.map((user, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>{user.fullname}</td>
      <td className="text-danger">{user.accountNumber}</td>
      <td>{user.email}</td>
      <td>
        {(user.balance || 0).toLocaleString("en-US", {
          // style: "currency",
          currency: "VND",
        })}{" "}
        VND
      </td>
      <td>{new Date(user.createAt).toLocaleDateString("en-GB").toString()}</td>
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

          <div className="row">
            {/* // table */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">List user new</h4>
                  <p className="card-category">{} </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Account Number</th>
                          <th>Email</th>

                          <th>Balance</th>
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
