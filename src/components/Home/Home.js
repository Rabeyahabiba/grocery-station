import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts]= useState([]);
    useEffect(() => {
          fetch ('https://powerful-ravine-38725.herokuapp.com/products')
          .then(res => res.json())
          .then(data => setProducts(data))
    },[])

    return (

        
        <div className ="row">
             {
               products.map(product => <Product  product={product}></Product>)
            }
          
        </div>
    );
};

export default Home;