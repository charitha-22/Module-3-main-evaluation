import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () =>{
        const user = logout(email, password);
        if(!user) return;

        // if(user.role ==="admin") 
    }
  return (
    <>
    <div>
        <h2>Login Page</h2>
        <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
    </div>
    </>
  )
}

export default Login