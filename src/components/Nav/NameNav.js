import { useDispatch } from "react-redux";

const NameNav = (props) => {
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
      <div className="collapse navbar-collapse justify-content-end">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default NameNav;
