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
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProduct from './components/ManageProduct/ManageProduct';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       {/* <p>Name: {loggedInUser.name}</p> */}
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
          <Route path="/addProduct">
            <AddProduct />
            </Route>
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
     
    </Router>
    </UserContext.Provider>
  );
}

export default App;
