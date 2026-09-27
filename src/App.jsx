import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        < Route path='/' element={<home/>} />
        < Route path='/cart' element={<cart/>} />
        < Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App
