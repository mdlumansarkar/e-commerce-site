import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useProductStore } from '../product/product';

const Homepage = () => {
  const { fetchProducts, products, deleteProduct, updatedProduct } = useProductStore(); // Ensure correct function name

  // State for modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle delete product
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      alert("Product Delete Error!");
    } else {
      alert("Product Deleted Successfully.");
      fetchProducts(); // Refresh the list
    }
  };

  // Open modal and set selected product
  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditedProduct({ ...product });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Save changes (update product)
  const handleSaveChanges = async () => {
    if (!selectedProduct) return;

    const { success, message } = await updatedProduct(selectedProduct._id, editedProduct);

    if (success) {
        alert("Product updated successfully!");

        // Close the Bootstrap modal properly
        const modal = document.getElementById("editModal");
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) modalInstance.hide(); 

        setSelectedProduct(null);
    } else {
        alert(message); // Show actual error message
    }
};


  return (
    <>
<div className='container' style={{minHeight:"100vh"}}>

<div className="container pt-5" style={{ minHeight: "100vh" }}>
  <h1 className="mb-4 text-center text-danger " >Current Products</h1>

  {products.length > 0 ? (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((product) => (
        <div className="col" key={product._id}>
          <div className="card shadow-lg rounded overflow-hidden" style={{ maxHeight: "450px" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <h5 className="card-text text-primary">${product.price}</h5>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(product._id)}
                  className="btn btn-outline-danger btn-sm"
                  >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center">No products available.</p>
  )}
  </div>
</div>




{/* <div className="container mt-5">
  <h1 className="mb-4 text-center text-danger">Current Products</h1>

  {products.length > 0 ? (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((product) => (
        <div className="col" key={product._id}>
          <div className="card shadow-lg rounded overflow-hidden" style={{ maxHeight: "450px" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <h5 className="card-text text-primary">${product.price}</h5>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(product._id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center">No products available.</p>
  )}
</div> */}


      {/* <div className="container">
  <h1 className="my-5 text-center text-danger">Current Products</h1>

  {products.length > 0 ? (
    <div className="row my-4">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product._id}>
          <div className="card shadow-sm rounded-lg">
            <img
              src={product.image}
              className="card-img-top rounded-top"
              alt={product.name}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <h5 className="card-text text-primary">${product.price}</h5>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(product._id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center">No products available.</p>
  )}
</div> */}


      {/* Edit Product Modal */}
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Update Product</h5>
              <button type="button" className="btn-close" id="closeModalButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Product Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  value={editedProduct.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  id="price"
                  value={editedProduct.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input
                  type="text"
                  name="image"
                  className="form-control"
                  id="image"
                  value={editedProduct.image}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" id="closeModalButton" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/create">
          No Products? Add here...
        </NavLink>
      </li>
    </>
  );
};

export default Homepage;




















// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useProductStore } from '../product/product';

// const Homepage = () => {
//   const { fetchProducts, products, deleteProduct, updateProduct } = useProductStore();

//   // State for modal
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [editedProduct, setEditedProduct] = useState({
//     name: '',
//     price: '',
//     image: ''
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Handle delete product
//   const handleDeleteProduct = async (pid) => {
//     const { success, message } = await deleteProduct(pid);
//     if (!success) {
//       alert("Product Delete Error!");
//     } else {
//       alert("Product Deleted Successfully.");
//     }
//   };

//   // Open modal and set selected product
//   const handleEditClick = (product) => {
//     setSelectedProduct(product);
//     setEditedProduct({ ...product });
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProduct((prev) => ({ ...prev, [name]: value }));
//   };

//   // Save changes (update product)
//   const handleSaveChanges = async () => {
//     if (!selectedProduct) return;

//     const { success, message } = await updateProduct(selectedProduct._id, editedProduct);
//     if (success) {
//       alert("Product updated successfully!");
//       fetchProducts(); // Refresh products
//     } else {
//       alert("Update failed!");
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <h1 className="my-5 mx-6">Your Favourite Collection is here...</h1>

//         {products.length > 0 ? (
//           <div className="row my-4 mx-4 py-3 px-3">
//             {products.map((product) => (
//               <div className="col-md-4" key={product._id}>
//                 <div className="card" style={{ width: "18rem" }}>
//                   <img src={product.image} style={{ height: "300px", width: "287px" }} alt={product.name} className="card-img-top" />
//                   <div className="card-body">
//                     <h4 className="card-title">{product.name}</h4>
//                     <h5 className="card-text">${product.price}</h5>
//                     <button type="button" className="btn btn-primary my-2 mx-2" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handleEditClick(product)}>
//                       Edit
//                     </button>
//                     <button type="button" onClick={() => handleDeleteProduct(product._id)} className="btn btn-danger my-2 mx-2">
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No products available.</p>
//         )}
//       </div>

//       {/* Edit Product Modal */}
//       <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="editModalLabel">Update Product</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Product Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control"
//                   id="name"
//                   value={editedProduct.name}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="price" className="form-label">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   className="form-control"
//                   id="price"
//                   value={editedProduct.price}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="image" className="form-label">Image URL</label>
//                 <input
//                   type="text"
//                   name="image"
//                   className="form-control"
//                   id="image"
//                   value={editedProduct.image}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary" onClick={handleSaveChanges} data-bs-dismiss="modal">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <li className="nav-item">
//         <NavLink className="nav-link active" aria-current="page" to="/create">
//           No Products? Add here...
//         </NavLink>
//       </li>
//     </>
//   );
// };

// export default Homepage;























// import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useProductStore } from '../product/product';

// const Homepage = () => {
//   const {deleteProduct} = useProductStore();


//   const handleDeleteProduct = async(pid) => {
//     const {success,message} = await deleteProduct(pid);
//     if(!success){
//       alert("Product Delete Error !");
//     }else{
//       alert("Product Deleted Successfully.");

//     }
//   }  
  
//   const { fetchProducts, products } = useProductStore();

//   useEffect(() => {
//     fetchProducts();
//   }, []); // Fetch products only once on mount

//   console.log("Products:", products);

//   return (
//     <>
//       <div className="container">
//         <h1 className='my-5 mx-6'>Your Favourite Collection is here...</h1>

//         {products.length > 0 ? (
//           <div className="row my-4 mx-4 py-3 px-3">
//             {products.map((product) => (
//               <div className="col-md-4" key={product._id}>
//                 <div className="card " style={{ width: "18rem" }}>
//                   <img src={product.image} style={{height:"300px",width:"287px"}} alt={product.name} className="card-img-top" />
//                   <div className="card-body ">
//                     <h4 className="card-title">{product.name}</h4>
//                     <p className="card-title">{product._id}</p>
//                     <h5 className="card-text">${product.price}</h5>
//                     <button type="button" className="btn btn-primary my-2 mx-2">Edit</button>
//                     <button type="button" onClick={() => handleDeleteProduct(product._id)} className="btn btn-danger my-2 mx-2">Delete</button>
//                     <a href="#" className="btn btn-primary">View Details</a>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             //modal

//             <div className='modal container'>
//             <div class="modal" tabindex="-1">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title">Update Product</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
        
        
//       <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Product Name</label>
//                 <input 
//                     type="text" 
//                     name='name' 
//                     className="form-control" 
//                     id="name"
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="price" className="form-label">Price</label>
//                 <input 
//                     type="number" 
//                     name='price' 
//                     className="form-control" 
//                     id="price"
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="image" className="form-label">Image</label>
//                 <input 
//                     type="text" 
//                     name='image'  
//                     className="form-control" 
//                     id="image"
//                 />
//             </div>

//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

//             </div>
//           </div>
//         ) : (
//           <p>No products available.</p>
//         )}
//       </div>

//       <li className="nav-item">
//         <NavLink className="nav-link active" aria-current="page" to="/create">
//           No Products? Add here...
//         </NavLink>
//       </li>
//     </>
//   );
// };

// export default Homepage;















// import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useProductStore } from '../product/product';

// const Homepage = (product) => {
//   const {fetchProducts, products} = useProductStore();

//   useEffect(() => {
//     fetchProducts();
//   },[fetchProducts]);


//   console.log("products",products);

//   return (
//     <>
//       <div className="container">
//         <h1>This is Home Page</h1>
       
//         <div className="card" style={{ width: "18rem" }}>
//           <img src={product.image} alt={product.name} className="card-img-top" />
//           <div className="card-body">
//             <h5 className="card-title">{product.name}</h5>
//             <p className="card-text">
//               ${product.price}
//             </p>
//             <button type="button" class="btn btn-primary my-4 mx-3">Primary</button>
//             <button type="button" class="btn btn-danger my-4 mx-3">Danger</button>
             
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div>
//       <li className="nav-item">
//              <NavLink className="nav-link active" aria-current="page" to="/create">No Products? Add here...</NavLink>
//               </li>
//     </>
//   );
// };

// export default Homepage;










// // import React from 'react'

// // const Homepage = () => {
// //   return (
// //     <>
// //     <div className='container'>
// //       <h1>This is Home Page</h1>
// //       <div class="card" style="width: 18rem;">
// //   <img src="..." class="card-img-top" alt="..."/>
// //   <div class="card-body">
// //     <h5 class="card-title">Card title</h5>
// //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// //     <a href="#" class="btn btn-primary">Go somewhere</a>
// //   </div>
// // </div>
// //     </div>
// //     </>
// //   )
// // }

// // export default Homepage
