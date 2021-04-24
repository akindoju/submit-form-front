import { Route, Switch } from 'react-router';
import './App.css';
import RegisterUser from './pages/RegisterUser/RegisterUser';
import Homepage from './pages/Homepage/Homepage';
import UsersPage from './pages/UsersPage/UsersPage';
import SignIn from './pages/SignIn/SignIn';
import LogPage from './pages/LogPage/LogPage';
import Profile from './pages/Profile/Profile';
import DeleteUser from './pages/DeleteUser/DeleteUser';
import UpdateName from './pages/UpdateName/UpdateName';
import UpdateEmail from './pages/UpdateEmail/UpdateEmail';
import UpdatePassword from './UpdatePassword/UpdatePassword';

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
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/update-name" exact>
          <UpdateName />
        </Route>
        <Route path="/update-email" exact>
          <UpdateEmail />
        </Route>
        <Route path="/update-password" exact>
          <UpdatePassword />
        </Route>
        <Route path="/delete" exact>
          <DeleteUser />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
