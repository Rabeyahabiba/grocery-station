import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        
        <div>
         <nav className="nav">
                <ul>
                <li>
                       <h1 style = {{ height: `50px`}}> Grocery-Station</h1>
                 </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                        <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/deals">Deals</Link>
                    </li>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    {/* <li>
                       
                        <Link className="btn-book" to="/login">Order</Link>
                    </li> */}
                   
                </ul>
            </nav>
        </div>
    );
};

export default Header;