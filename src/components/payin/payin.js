import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameNav from "../Nav/NameNav";
import { payInUser } from "../../actions/payin";
import { queryAccount } from "../../actions/accounts";

const Payin = (e) => {
  const user = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  // state
  const [checked, setChecked] = useState(false);

  const [payInData, setPayInData] = useState({
    accountNumber: "",
    cash: "",
    detail: "",
  });

  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    if (checked === false) {
      setDataUser("");
    } else {
      // tự động điền tên email khi nhập đúng account, checked
      setDataUser({
        fullname: user.fullname,
        email: user.email,
      });
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
    /////////
    dispatch(
      payInUser(
        payInData.accountNumber,
        parseInt(payInData.cash),
        payInData.detail
      )
    );
    setChecked(false);
    setPayInData({
      accountNumber: "",
      cash: "",
      detail: "",
    });
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
          <div className="col-md-7">
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
                    <div className="col-md-4">
                      <button
                        id="btn-check"
                        type="button"
                        className="btn btn-primary pull-right"
                        onClick={handleCheckAccount}
                      >
                        Check account{" "}
                      </button>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          placeholder="Full name"
                          type="text"
                          className="form-control"
                          value={dataUser.fullname || ""}
                          disabled
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          placeholder="Email"
                          type="text"
                          className="form-control"
                          value={dataUser.email || ""}
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
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="form-group">
                          <label className="bmd-label-floating">Comment</label>
                          <textarea
                            name="detail"
                            value={payInData.detail}
                            onChange={handleChange}
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
