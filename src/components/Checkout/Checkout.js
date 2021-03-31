import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        
        <div>
           <h1>Ordered By {loggedInUser.name} </h1>
        </div>
    );
};

export default Checkout;
