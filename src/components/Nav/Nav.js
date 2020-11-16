import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <>
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="black"
        data-image="https://images-na.ssl-images-amazon.com/images/I/51jIvKOEZeL._SL1000_.jpg"
      >
        <div className="logo">
          {/* <Link to='/' className="simple-text logo-normal">EMPLOYEE</Link> */}
          <div className="simple-text logo-normal" > EMPLOYEE</div>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item active  ">
              <Link to='/dashboard' className="nav-link"><i className="material-icons">dashboard</i>Dashboard</Link>
            </li>
            <li className="nav-item ">
              {/* Link */}
              <Link to='/payin' className="nav-link"><i className="material-icons">payment</i>Pay In User</Link>
            </li>
            <li className="nav-item ">
              <Link to='/history' className="nav-link" ><i className="material-icons">payment</i>History User</Link>
            </li>
            <li className="nav-item ">
              <Link to='/create-user' className="nav-link" ><i className="material-icons">person_add</i>Create User</Link>
            </li>
          </ul>
        </div>
      </div >
    </>
  );
};

export default Nav;
