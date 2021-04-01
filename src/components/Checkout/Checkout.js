import React, { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const {_id} = useParams();
    // const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const savedCart = getDatabaseCart();
    //     const productKeys = Object.keys(savedCart);
    //     fetch ( 'http://localhost:5555/productsByKeys', {
    //         method : 'POST',
    //         headers: {
    //             'content-Type' : 'application/json'
    //         },
    //          body : JSON.stringify(productKeys)
    //     })
    //     .then(res => res.json())
    //     .then(data => setCart(data))
    // }, [])
   
    // const onSubmit = data => {
    //   const savedCart = getDatabaseCart();
    //     const orderDetails = {...loggedInUser, products:savedCart, shipment: data, orderTime: new Date()};
    //  fetch('http://localhost:5555/addOrder',{
    //    method: 'POST',
    //    headers: {
    //      'Content-Type': 'application/json'
    //    },
    //    body: JSON.stringify(orderDetails)
    //  })
    //  .then(res => res.json())
    //  .then(data => {
    //    if(data){
    //      processOrder();
    //      alert('Order placed successfully')
    //    }
    //  })
    // };

    
     
  
    // console.log(watch("example"));
    return (
    //     <form className ="ship-form" onSubmit={handleSubmit(onSubmit)}>    
       
    //     <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder ="Your Name" />        
    //     {errors.name && <span className ="error">Name is required</span>}
        
    //     <input name="email" defaultValue={loggedInUser.email}ref={register({ required: true })} placeholder ="Your Email"/>        
    //     {errors.email && <span className ="error">Email is required</span>}
    //     <input name="address" ref={register({ required: true })} placeholder ="Your Address"/>        
    //     {errors.address && <span className ="error">address is required</span>}
    //     <input name="phone" ref={register({ required: true })} placeholder ="Your Phone Number" />        
    //     {errors.address && <span className ="error">phone number is required</span>}
    //     <input type="submit" />
    //   </form>
        <div>
           <h1>Ordered By {loggedInUser.name} </h1>
           <h2> {_id}</h2>
        </div>
    
    );
};

export default Checkout;
