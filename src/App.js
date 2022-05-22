import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Shared/Header/Header'
import Signin from './components/Signin/Signin/Signin'
import Signup from './components/Signin/Signup/Signup'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
