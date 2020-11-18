import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/users";
import NameNav from "../Nav/NameNav";

const History = () => {
  // use selector -> reducers
  const state = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const history = state.map((user, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>{user.fullname}</td>
      <td className="text-info">
        {user.accountNumber}({user._id})
      </td>
      <td>{user.balance} VND</td>
      <td>{new Date(user.createAt).toLocaleDateString("en-GB").toString()}</td>
    </tr>
  ));
  return (
    <>
      <NameNav name={"History"} />
      <div className="content">
        <div className="container-fluid ">
          <div className="row justify-content-center align-items-center">
            {/* // content */}
            {/* input  */}
            <div className="col-md-12">
              <div className="form-group">
                <label className="bmd-label-floating">
                  Enter infor user ...
                </label>
                <input type="text" className="form-control"></input>
              </div>
            </div>
            {/* // table */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">User</h4>
                  <p className="card-category">
                    Here is a subtitle for this table
                  </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Account Number</th>
                          <th>Balance</th>
                          <th>Create At</th>
                        </tr>
                      </thead>
                      {/* data  */}
                      <tbody>{history}</tbody>
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

export default History;
