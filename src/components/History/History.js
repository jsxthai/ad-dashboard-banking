import NameNav from "../Nav/NameNav";

const History = () => {
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
                          <th>Country</th>
                          <th>City</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      {/* data  */}
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Dakota Rice</td>
                          <td>Niger</td>
                          <td>Oud-Turnhout</td>
                          <td className="text-primary">$36,738</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Minerva Hooper</td>
                          <td>Curaçao</td>
                          <td>Sinaai-Waas</td>
                          <td className="text-primary">$23,789</td>
                        </tr>
                      </tbody>
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
