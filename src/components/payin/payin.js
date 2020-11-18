import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameNav from "../Nav/NameNav";
import { payInUser } from "../../actions/users";
import { queryAccount } from "../../actions/accounts";

const Payin = (e) => {
  const user = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  // state
  const [checked, setChecked] = useState(false);

  const [payInData, setPayInData] = useState({
    accountNumber: "",
    cash: "",
  });

  const [fullname, setFullname] = useState("");
  useEffect(() => {
    if (checked === false) {
      setFullname("");
    } else {
      setFullname(user.fullname);
    }
  }, [user, checked]);

  const handleChange = (e) => {
    const value = e.target.value;
    setPayInData({
      ...payInData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(payInUser(payInData.accountNumber, parseInt(payInData.cash)));
  };

  const handleCheckAccount = async () => {
    await dispatch(queryAccount(payInData.accountNumber));
    setChecked(true);
  };

  return (
    <div className="content">
      <div className="container-fluid ">
        {/* // content */}
        <NameNav name={"Pay in"} />
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Pay in</h4>
                <p className="card-category">Complete pay in</p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">
                          Account number
                        </label>
                        <input
                          id="accountNumber"
                          type="text"
                          className="form-control"
                          name="accountNumber"
                          value={payInData.accountNumber}
                          onChange={handleChange}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <button
                        id="btn-check"
                        type="button"
                        className="btn btn-primary pull-right"
                        onClick={handleCheckAccount}
                      >
                        Check account{" "}
                      </button>
                    </div>

                    {/* <div className="col-md-3">
                      <button
                        type="button"
                        className="btn btn-primary pull-right"
                        onClick={handleClear}
                      >
                        Clear
                      </button>
                    </div> */}
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        {/* <label className="bmd-label-floating">Full name</label> */}
                        <input
                          placeholder="Full name"
                          type="text"
                          className="form-control"
                          value={fullname || ""}
                          disabled
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">
                          Cash number{" "}
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          name="cash"
                          value={payInData.cash}
                          onChange={handleChange}
                          pattern="[0-9]{3,10}"
                          required
                        ></input>
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">
                          Confirm cash
                        </label>
                        <input type="text" className="form-control"></input>
                      </div>
                    </div> */}
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="form-group">
                          <label className="bmd-label-floating">Comment</label>
                          <textarea
                            className="form-control"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary pull-right">
                    Pay In
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

export default Payin;
