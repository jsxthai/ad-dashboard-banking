import Nav from './components/Nav/Nav';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Payin from './components/Payin/Payin';
import History from './components/History/History';
import Footer from './components/Footer/Footer';
import CreateUser from './components/CreateUser/CreateUser';


function App() {
    console.log('app')
    return (
        <>
            <Nav>
                <Footer />

            </Nav>
            <Switch>
                <Route path='/' component={Dashboard} exact />
                <Route path='/dashboard' component={Dashboard} exact />
                <Route path='/payin' component={Payin} />
                <Route path='/history' component={History} />
                <Route path='/create-user' component={CreateUser} />
            </Switch>
        </>
    );
}

export default App;
