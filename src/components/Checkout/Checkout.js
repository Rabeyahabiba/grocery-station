import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap'

const Checkout = () => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { _id } = useParams();
    const [order, setOrders] = useState([]);
    console.log(order)
    useEffect(() => {
        fetch('https://powerful-ravine-38725.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const newOrder = order.find(pd => pd?._id === _id)
    // console.log(newOrder?.name.price)
    const handleCheckout = (_id) => {
        history.push(`/orders/${_id}`);
      }
    return (
        <div>
            <h1> CheckOut</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Description </th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{newOrder?.name}</td>
                        <td>1</td>
                        <td>{newOrder?.price}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>{newOrder?.price}</td>
                       
                    </tr>
                </tbody>
                <Button onClick={() => handleCheckout(_id)}>Checkout </Button>
               
            </Table>
        </div>
    );
};

export default Checkout;
