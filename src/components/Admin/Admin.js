import { Link } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
  const onSubmit = data =>{
      const eventData = {
          name: data.name,
          price: data.price,
          weight: data.weight,
          imageURL: imageURL
      };
      const url = `http://localhost:5555/addProduct`;
    // console.log(eventData)
    fetch(url,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
  body: JSON.stringify(eventData)
        
    })
    .then(res => console.log('server side response'))
  };

  const handleImageUpload = event => {
      console.log(event.target.files[0])
      const imageData = new FormData();
      imageData.set('key', '2cbf656ef067a875593467e3a8e92081');
      imageData.append('image',event.target.files[0]);

      axios.post('https://api.imgbb.com/1/upload', 
       imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (    
        <div>
<nav  className="nav" >
                <ul>
                
                    <li>
                        <Link to="/manageProduct">Manage Product</Link>
                    </li>
                    <li>
                        <Link to="/addProduct">Add Product</Link>
                        </li>
                    
                  
                   
                </ul>
            </nav>
          
            <h1> Add Product </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h4> Product Name</h4>
      <input name="name" defaultValue="Product Name" ref={register} />   
      <br/>
      <h4> Price </h4>
      <input name="price" defaultValue="Enter Price" ref={register} />
      <br/>
      <h4> Weight </h4>
      <input name="weight" defaultValue="Weight" ref={register}/>
      <br/> 
      <h4> Add Photo </h4> 
      <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
     
      <br/>
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Admin;