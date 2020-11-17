import { useState } from "react";
import { useDispatch } from "react-redux";
import NameNav from "../Nav/NameNav";
import { payInUser } from "../../actions/users";

const Payin = (e) => {
  const [payInData, setPayInData] = useState({
    accountNumber: "",
    cash: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPayInData({
      ...payInData,
      [e.target.name]: value,
    });
    // console.log(payInData);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(payInUser(payInData.accountNumber, parseInt(payInData.cash)));
    setPayInData({
      accountNumber: "",
      cash: "",
    });
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
                          type="text"
                          className="form-control"
                          name="accountNumber"
                          value={payInData.accountNumber}
                          onChange={handleChange}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="bmd-label-floating">Full name</label>
                        <input
                          type="text"
                          className="form-control"
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
