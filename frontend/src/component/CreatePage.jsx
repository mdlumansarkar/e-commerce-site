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
<div className='container'>

        <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <h2 className="text-center mb-4 w-100" style={{color:"green"}}>Create New Product</h2>
      <form method="POST" className="w-100 px-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">Product Name</label>
          <input 
            type="text" 
            name="name" 
            value={newProduct.name} 
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
            className="form-control form-control-lg w-100" 
            id="name"
            placeholder="Enter product name"
            />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label fw-semibold">Price</label>
          <input 
            type="number" 
            name="price" 
            value={newProduct.price} 
            onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })} 
            className="form-control form-control-lg w-100" 
            id="price"
            placeholder="Enter price"
            />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label fw-semibold">Image URL</label>
          <input 
            type="text" 
            name="image" 
            value={newProduct.image} 
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} 
            className="form-control form-control-lg w-100" 
            id="image"
            placeholder="Enter image URL"
            />
        </div>
        <button type="submit" onClick={handleProduct} className="btn btn-primary btn-lg w-100">Submit</button>
      </form>
            </div>
    </div>






    // right code here...
    //     <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
    //   <div className="w-100 px-4">
    //     <h2 className="text-center mb-4">Create New Product</h2>
    //     <form method="POST" className="w-100">
    //       <div className="mb-3">
    //         <label htmlFor="name" className="form-label fw-semibold">Product Name</label>
    //         <input 
    //           type="text" 
    //           name="name" 
    //           value={newProduct.name} 
    //           onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
    //           className="form-control form-control-lg" 
    //           id="name"
    //           placeholder="Enter product name"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="price" className="form-label fw-semibold">Price</label>
    //         <input 
    //           type="number" 
    //           name="price" 
    //           value={newProduct.price} 
    //           onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })} 
    //           className="form-control form-control-lg" 
    //           id="price"
    //           placeholder="Enter price"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="image" className="form-label fw-semibold">Image URL</label>
    //         <input 
    //           type="text" 
    //           name="image" 
    //           value={newProduct.image} 
    //           onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} 
    //           className="form-control form-control-lg" 
    //           id="image"
    //           placeholder="Enter image URL"
    //         />
    //       </div>
    //       <button type="submit" onClick={handleProduct} className="btn btn-primary w-100 btn-lg">Submit</button>
    //     </form>
    //   </div>
    // </div>



    //     <div className="form-container">
    //      <div style={styles.formContainer}>
    //         <form method="POST" style={styles.form}>
    //             <div className="mb-3" style={styles.formGroup}>
    //                 <label htmlFor="name" className="form-label" style={styles.label}>Product Name</label>
    //                 <input
    //                     type="text"
    //                     name="name"
    //                     value={newProduct.name}
    //                     onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
    //                     className="form-control"
    //                     id="name"
    //                     style={styles.input}
    //                 />
    //             </div>
    //             <div className="mb-3" style={styles.formGroup}>
    //                 <label htmlFor="price" className="form-label" style={styles.label}>Price</label>
    //                 <input
    //                     type="number"
    //                     name="price"
    //                     value={newProduct.price}
    //                     onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
    //                     className="form-control"
    //                     id="price"
    //                     style={styles.input}
    //                 />
    //             </div>
    //             <div className="mb-3" style={styles.formGroup}>
    //                 <label htmlFor="image" className="form-label" style={styles.label}>Image</label>
    //                 <input
    //                     type="text"
    //                     name="image"
    //                     value={newProduct.image}
    //                     onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
    //                     className="form-control"
    //                     id="image"
    //                     style={styles.input}
    //                 />
    //             </div>
    //             <button type="submit" onClick={handleProduct} style={styles.button}>Submit</button>
    //         </form>
    //     </div>
    // </div>







        // <form method='POST'>
        //     <div className="mb-3 ">
        //         <label htmlFor="name" className="form-label">Product Name</label>
        //         <input 
        //             type="text" 
        //             name='name' 
        //             value={newProduct.name} 
        //             onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
        //             className="form-control" 
        //             id="name"
        //         />
        //     </div>
        //     <div className="mb-3">
        //         <label htmlFor="price" className="form-label">Price</label>
        //         <input 
        //             type="number" 
        //             name='price' 
        //             value={newProduct.price} 
        //             onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })} 
        //             className="form-control" 
        //             id="price"
        //         />
        //     </div>
        //     <div className="mb-3">
        //         <label htmlFor="image" className="form-label">Image</label>
        //         <input 
        //             type="text" 
        //             name='image' 
        //             value={newProduct.image} 
        //             onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} 
        //             className="form-control" 
        //             id="image"
        //         />
        //     </div>
        //     <button type="submit" onClick={handleProduct} className="btn btn-primary">Submit</button>
        // </form>
    );
};



const styles = {
    formContainer: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '1rem',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: '#333',
    },
    input: {
        padding: '0.75rem',
        marginBottom: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
        width: '100%',
        transition: 'border-color 0.3s ease',
    },
    inputFocus: {
        borderColor: '#007bff',
        outline: 'none',
    },
    button: {
        backgroundColor: '#007bff',
        border: 'none',
        color: 'white',
        padding: '0.75rem 1.25rem',
        borderRadius: '4px',
        width: '100%',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s ease-in-out',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
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
