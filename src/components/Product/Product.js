import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Product = ({product}) => {
   
    const history = useHistory()
    // const { imageURL,name  } = product;
    const productStyle = { border: '1px solid salmon', borderRadius: '5px', margin: '5px', padding: '10px', float: 'left' }
    const handleOrder = (_id) => {
        history.push(`/checkout/${_id}`);
      }
    return (
        <div className = "product-container" style={productStyle}>
        <img style = {{height: '200px'}} src ={product.imageURL} alt=""/>
        <h3 style={{ textAlign: 'center' }} > {product.name} : {product.price}</h3>        
        <Button onClick={() => handleOrder(product._id)} variant="info"  size="lg" block> Buy Now </Button>        
    </div>
    );
};

export default Product;