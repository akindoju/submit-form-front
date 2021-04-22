import { Route, Switch } from 'react-router';
import './App.css';
import RegisterUser from './pages/RegisterUser/RegisterUser';
import Homepage from './pages/Homepage/Homepage';
import UsersPage from './pages/UsersPage/UsersPage';
import SignIn from './pages/SignIn/SignIn';
import LogPage from './pages/LogPage/LogPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/homepage" exact>
          <Homepage />
        </Route>
        <Route path="/register" exact>
          <RegisterUser />
        </Route>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/users" exact>
          <UsersPage />
        </Route>
        <Route path="/log" exact>
          <LogPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
