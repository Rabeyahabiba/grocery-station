import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        
        <div style={{textAlign: 'center'}}>
            <h1>Ordered By {loggedInUser.name} </h1>
           
        </div>
    );
};

export default Orders;