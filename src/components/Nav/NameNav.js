const NameNav = (props) => {
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
        <p>User1</p>
      </div>
    </nav>
  );
};

export default NameNav;
