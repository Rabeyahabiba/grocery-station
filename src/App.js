import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <p>Name: {loggedInUser.name}</p>
<Router>

     <Header/>
       
        <Switch>
           <Route path="/home">
             <Home/>
           </Route>
          <PrivateRoute path="/orders/:productType">
            <Orders />
          </PrivateRoute>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
         
          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
     
    </Router>
    </UserContext.Provider>
  );
}

export default App;
