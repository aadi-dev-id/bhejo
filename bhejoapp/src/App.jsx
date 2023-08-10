import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './templates/auth/Login'
import Register from './templates/auth/Register'
import Error404 from './templates/error/Error404'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/change-password' element={<h1>Change Password Page</h1>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
