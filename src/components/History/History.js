import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameNav from "../Nav/NameNav";
import { fetchHistory } from "../../actions/history";
import { CLEAR_QUERY_ACCOUNT } from "../../constants/actionTypes";

const History = () => {
  const historyTrans = useSelector((state) => state.history);
  const [accountNumber, setAccountNumber] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [rowData, setRowData] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchHistory(accountNumber));
  };

  useEffect(() => {
    // console.log(selectType);
    // console.log(typeof selectType);
    const row = historyTrans
      .filter((history) => {
        if (selectType === "all") {
          return true;
        }
        return history.typeTrans === selectType;
      })
      .map((his, key) => {
        return (
          <tr key={key + 1}>
            <td>{key + 1}</td>
            <td>
              {new Date(parseInt(his.date))
                .toLocaleDateString("en-GB")
                .toString()}
              {" - "}
              {new Date(parseInt(his.date))
                .toLocaleTimeString("it-IT")
                .toString()}
            </td>
            <td>{his.accountSource}</td>
            <td>
              {" "}
              {(his.mount || 0).toLocaleString("en-US", {
                // style: "currency",
                currency: "VND",
              })}{" "}
              VND
            </td>
            <td className="text-info">{his.typeTrans}</td>
            <td>{his.detail}</td>
          </tr>
        );
      });

    setRowData(row);
  }, [historyTrans, selectType]);

  useEffect(() => {
    if (accountNumber === "") {
      setRowData("");
      setAccountNumber("");
    }
  }, [accountNumber]);

  const handleChangeInputInfoAccount = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleClear = () => {
    setRowData("");
    setAccountNumber("");
    dispatch({ type: CLEAR_QUERY_ACCOUNT });
  };

  const handleChangeSelect = (e) => {
    setSelectType(e.target.value);
  };

  return (
    <>
      <NameNav name={"History"} />
      <div className="content">
        <div className="container-fluid ">
          <div className="row ">
            {/* // content */}
            {/* input  */}
            <div className="col-md-4">
              <div className="form-group">
                <label className="bmd-label-floating">
                  Enter account number ...
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="infoAccount"
                  value={accountNumber}
                  onChange={handleChangeInputInfoAccount}
                ></input>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <select
                  className="custom-select"
                  required
                  onChange={handleChangeSelect}
                  value={selectType}
                >
                  <option value={"all"}>Select type (All)</option>
                  <option value={"transfer"}>Transfer</option>
                  <option value={"receive"}>Receive money</option>
                  <option value={"debt payment"}>Debt payment</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
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
                          <th>Mount</th>
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
