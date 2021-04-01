import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Admin from './Components/Admin/Admin';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckOut from './Components/CheckOut/CheckOut';
import Orders from './Components/Orders/Orders';


export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkOut/:name">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/manage">
            <ManageProducts></ManageProducts>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
