import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const Product = ({product}) => {
    const history = useHistory()
    const { imageURL,name  } = product;
    const productStyle = { border: '1px solid salmon', borderRadius: '5px', margin: '5px', padding: '10px', float: 'left' }
    const handleOrder = (productType) => {
        history.push(`/orders/${productType}`);
      }
    return (
        <div className = "product-container" style={productStyle}>
        <img style = {{height: '200px'}} src ={product.imageURL} alt=""/>

        <h3 style={{ textAlign: 'center' }} > {product.name} </h3>
        
        <Button onClick={() => handleOrder(product.productType)} variant="info"  size="lg" block> Order </Button> 
        
    </div>
    );
};

export default Product;