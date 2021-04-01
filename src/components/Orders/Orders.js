import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import { Table } from 'react-bootstrap'
import { Link } from '@material-ui/core';
import { useForm } from 'react-hook-form';
const Orders = () => {
    const { register, handleSubmit, watch, errors } = useForm();
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
    const onSubmit = data => {   
        
        
    const orderDetails = {...loggedInUser, shipment: data, orderTime: new Date()};
       fetch('https://powerful-ravine-38725.herokuapp.com/addOrder',{
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(orderDetails)
       })
       .then(res => res.json())
       .then(data => {
         if(data){
        //    processOrder();
           alert('Order placed successfully')
         }
       })
      };
    return (
        <div style={{ textAlign: 'center' }}>
            <h1> {loggedInUser.name} You have ordered </h1>
            <br />
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
            </Table>
                 
            <h5> Want to order  <Link to="/home">another product?</Link> </h5>
        <br/>
        <form className ="ship-form" onSubmit={handleSubmit(onSubmit)}>    
       <br/>
        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder ="Your Name" />        
        {errors.name && <span className ="error">Name is required</span>}
        <br/>
        <input name="email" defaultValue={loggedInUser.email}ref={register({ required: true })} placeholder ="Your Email"/>        
        {errors.email && <span className ="error">Email is required</span>}
        <br/>
        <input name="address" ref={register({ required: true })} placeholder ="Your Address"/>        
        {errors.address && <span className ="error">address is required</span>}
        <br/>
        <input name="phone" ref={register({ required: true })} placeholder ="Your Phone Number" />        
        {errors.address && <span className ="error">phone number is required</span>}
        <br/>
        <input type="submit" />
      </form>
        </div>
    );
};

export default Orders;