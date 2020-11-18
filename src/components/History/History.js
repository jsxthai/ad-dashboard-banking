import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameNav from "../Nav/NameNav";
import { queryAccount } from "../../actions/accounts";

const History = () => {
  // case: infoAccount is accountNumber

  const account = useSelector((state) => state.accounts);
  const [infoAccount, setInfoAccount] = useState("");
  const [rowData, setRowData] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(queryAccount(infoAccount));
  };

  useEffect(() => {
    // console.log(account);
    let row = [];
    if (account.transfer) {
      const transfer = account.transfer;
      row = [...row, ...transfer];
    }
    if (account.receive) {
      const receive = account.receive;
      row = [...row, ...receive];
    }
    row = row.map((item, key) => {
      return (
        <tr key={key + 1}>
          <td>{key + 1}</td>
          <td>
            {new Date(parseInt(item.date))
              .toLocaleDateString("en-GB")
              .toString()}
            {" - "}
            {new Date(parseInt(item.date))
              .toLocaleTimeString("it-IT")
              .toString()}
          </td>
          <td>{account.accountNumber}</td>
          <td>
            {" "}
            {(item.money || 0).toLocaleString("en-US", {
              // style: "currency",
              currency: "VND",
            })}{" "}
            VND
          </td>
          <td className="text-info">{item.type}</td>
          <td>{item.details}</td>
        </tr>
      );
    });
    setRowData(row);
  }, [account]);

  useEffect(() => {
    if (infoAccount === "") {
      setRowData("");
      setInfoAccount("");
    }
  }, [infoAccount]);

  const handleChangeInputInfoAccount = (e) => {
    setInfoAccount(e.target.value);
  };

  const handleClear = () => {
    setRowData("");
    setInfoAccount("");
    dispatch({ type: "CLEAR_QUERY_ACCOUNT" });
  };

  return (
    <>
      <NameNav name={"History"} />
      <div className="content">
        <div className="container-fluid ">
          <div className="row ">
            {/* // content */}
            {/* input  */}
            <div className="col-md-6">
              <div className="form-group">
                <label className="bmd-label-floating">
                  Enter account number ...
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="infoAccount"
                  value={infoAccount}
                  onChange={handleChangeInputInfoAccount}
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              <button
                type=""
                className="btn btn-primary pull-left"
                onClick={handleClick}
              >
                Search history
              </button>
              <button
                type=""
                className="btn btn-info pull-left"
                onClick={handleClear}
              >
                Clear
              </button>
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
                          <th></th>
                          <th>Date</th>
                          <th>Account number</th>
                          <th>Money number</th>
                          <th>Type</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      {/* c2 */}
                      {/* <tbody>{rowData.length > 0 ? rowData : null}</tbody> */}
                      <tbody>{rowData || null}</tbody>
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
