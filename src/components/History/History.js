import NameNav from "../Nav/NameNav";
// justify-content-center align-items-center
const History = () => {
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
                  Enter infor user ...
                </label>
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="col-md-6">
              <button type="" className="btn btn-primary  ">
                Search history
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
                      {/* data  */}
                      <tr>
                        <td>1</td>
                        <td>11/11/2020</td>
                        <td>111111111</td>
                        <td className="text-info">1111</td>
                        <td>Transfer</td>
                        <td>ABC</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>11/11/2020</td>
                        <td>111111111</td>
                        <td className="text-info">1111</td>
                        <td>Receive money</td>
                        <td>ABC</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>11/11/2020</td>
                        <td>111111111</td>
                        <td className="text-info">1111</td>
                        <td>Payment reminder</td>
                        <td>ABC</td>
                      </tr>
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
