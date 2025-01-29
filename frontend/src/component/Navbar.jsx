import React from 'react'
import { NavLink } from 'react-router-dom'
import { useProductStore } from '../product/product'

const Navbar = () => {
  
  const {products} = useProductStore();


  return (

    <>
    <div className='container mx-0 my-0'>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><h1 style={{color:"orange"}}>Sotero</h1> <h3>Online Shopping</h3></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active my-2 mx-2" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link my-2 mx-2" to="/">procuct store</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link my-2 mx-2" to="/create">Create</NavLink>
        </li>
        <li className="nav-item">
          <button>Add Item</button>
        </li>
        <li className="nav-item">
          <button>Dark mode enable</button>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>

    </>
    
  )
}

export default Navbar
