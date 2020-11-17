import Nav from './components/Nav/Nav';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Payin from './components/Payin/Payin';
import History from './components/History/History';
import CreateUser from './components/CreateUser/CreateUser';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './actions/users';



function App() {

    const [isLogin, setIsLogin] = useState('null');

    useEffect(() => {
        setIsLogin('employee');
    }, [])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    return (
        <>
            {isLogin === 'employee'
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
                : <Login />}
        </>
    );
}

export default App;
