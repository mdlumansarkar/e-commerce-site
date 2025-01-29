import React, { useState } from 'react';
import { useProductStore } from '../product/product';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    });

    const { createProduct } = useProductStore();

    const handleProduct = async (e) => {
        e.preventDefault();  // Prevent page refresh

        const { success, message } = await createProduct(newProduct);
        console.log("Success:", success);
        console.log("Message:", message);

        if (success) {
            alert("Product created successfully!");
            setNewProduct({ name: '', price: '', image: '' });  // Reset form
        } else {
            alert(message);
        }
    };

    return (
        <form method='POST'>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Product Name</label>
                <input 
                    type="text" 
                    name='name' 
                    value={newProduct.name} 
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
                    className="form-control" 
                    id="name"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input 
                    type="number" 
                    name='price' 
                    value={newProduct.price} 
                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })} 
                    className="form-control" 
                    id="price"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input 
                    type="text" 
                    name='image' 
                    value={newProduct.image} 
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} 
                    className="form-control" 
                    id="image"
                />
            </div>
            <button type="submit" onClick={handleProduct} className="btn btn-primary">Submit</button>
        </form>
    );
};

export default CreatePage;






















// import React from 'react'
// import { useState } from 'react'
// import { useProductStore } from '../product/product';

// const CreatePage = () => {
//     const [newProduct, setNewProduct] = useState({
//         name:'',
//         price:'',
//         image:''
//     });

//     const {createProduct} = useProductStore();

//     // console.log(newProduct);

//     const handleProduct= async() =>{
//       const {success,message} = await createProduct(newProduct);
//       console.log("Success:",success);
//       console.log("Message:",message);
//     }
//   return (
//     <>
    
//     <form method='POST'>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
//     <input type="text" name='name' value={newProduct.name} onChange={(e) =>{setNewProduct({...newProduct,name:e.target.value})}} className="form-control" id="name" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
//     <input type="number" name='price' onChange={(e) =>{setNewProduct({...newProduct,price:e.target.value})}} value={newProduct.price} className="form-control" id="price"/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
//     <input type="text" name='image' onChange={(e) =>{setNewProduct({...newProduct,image:e.target.value})}} value={newProduct.image} className="form-control" id="image"/>
//   </div>
//   <button type="submit" onClick={handleProduct} className="btn btn-primary">Submit</button>
// </form>
//     </>
//   )
// }

// export default CreatePage
