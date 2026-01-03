import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './routes/ProtectedRoute'
import AdminDashboard from './pages/AdminDashboard'
import CustomerDashboard from './pages/CustomerDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login/>} />

        <Route path='/admin/dashboard' element ={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }/>

        <Route path='/customers/dashboard' element ={
          <ProtectedRoute role="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
