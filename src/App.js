import Nav from './components/Nav/Nav';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js';
import Payin from './components/PayIn/PayIn.js';
import History from './components/History/History.js';
import CreateUser from './components/CreateUser/CreateUser.js';
import Footer from './components/Footer/Footer.js';
import Login from './components/Login/Login.js';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { fetchUsers } from './actions/users';



function App() {
    const stateLogin = useSelector((state) => state.login);
    console.log('app', stateLogin)
    // const [isLogin, setIsLogin] = useState('null');
    const [isLogin, setIsLogin] = useState(stateLogin.isLogin);
    console.log(isLogin)
    // const dispatch = useDispatch()
    // dispatch({ type: "CHECK_LOGIN" });


    // const dispatch = useDispatch();
    useEffect(() => {
        setIsLogin(stateLogin.isLogin)
    }, [stateLogin]);


    return (
        <>
            {isLogin
                ? <div className="wrapper ">
                    <Nav />
                    <div className="main-panel">
                        <Switch>
                            <Route path='/' component={Dashboard} exact />
                            <Route path='/dashboard' component={Dashboard} exact />
                            <Route path='/payin' component={Payin} exact />
                            <Route path='/history' component={History} exact />
                            <Route path='/create-user' component={CreateUser} exact />
                        </Switch>
                        <Footer></Footer>
                    </div>
                </div>
                : <>
                    <Switch>
                        <Route path="/" >
                            <Login />
                        </Route>
                    </Switch>
                </>
            }
        </>
    );
}

export default App;
