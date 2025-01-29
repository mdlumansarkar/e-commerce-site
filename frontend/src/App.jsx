import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import CreatePage from './component/CreatePage'
import Homepage from './component/Homepage'
import Navbar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import { useProductStore } from './product/product'

function App() {
  const {products} = useProductStore();


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element={<Homepage/>}></Route>
      <Route path = "/create" element={<CreatePage/>}></Route>
    </Routes>
    </>
  )
}

export default App
