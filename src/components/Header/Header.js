import React from 'react';
import { Link } from 'react-router-dom';
import header from '../../images/Bg.png';
import './Header.css';
const Header = () => {
    return (
        
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
         <nav  className="nav" >
                <ul>
                
                     <h1> Grocery-Station</h1>
                
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
                    <li>
                        <Link to="/checkout">Checkout</Link>
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