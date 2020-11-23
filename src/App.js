import Nav from "./components/Nav/Nav";
import { Redirect, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Payin from "./components/PayIn/PayIn.js";
import History from "./components/History/History.js";
import CreateUser from "./components/CreateUser/CreateUser.js";
import Footer from "./components/Footer/Footer.js";
import Login from "./components/Login/Login.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const stateLogin = useSelector((state) => state.login);
  const [isLogin, setIsLogin] = useState(stateLogin.isLogin);

  useEffect(() => {
    setIsLogin(stateLogin.isLogin);
  }, [stateLogin]);

  return (
    <>
      {isLogin ? (
        <div className="wrapper ">
          <Nav />
          <div className="main-panel">
            <Route path="/" component={Dashboard} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/payin" component={Payin} exact />
            <Route path="/history" component={History} exact />
            <Route path="/create-user" component={CreateUser} exact />
            <Footer></Footer>
            <Redirect to="/" />
          </div>
        </div>
      ) : (
        <>
          <Route path="/" component={Login} exact></Route>
          <Redirect to="/" />
        </>
      )}
    </>
  );
}

export default App;
