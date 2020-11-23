import { useDispatch, useSelector } from "react-redux";

const NameNav = (props) => {
  const username = useSelector((state) => state.login.userData);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
      <div className="container-fluid">
        <div className="navbar-wrapper">
          <a className="navbar-brand" href="/">
            {props.name}
          </a>
        </div>
      </div>

      <div className="collapse navbar-collapse justify-content-end"></div>
      <div className="collapse navbar-collapse justify-content-end">
        <button
          onClick={handleLogout}
          type="submit"
          className="btn  pull-right"
        >
          <i className="material-icons">person</i>
          {username} - LOGOUT
        </button>
      </div>
    </nav>
  );
};

export default NameNav;
