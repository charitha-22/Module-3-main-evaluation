import React, { createContext, useContext, useEffect, useState } from 'react'
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
const [user,setUser] = useState();

useEffect(()=>{
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if(savedUser) setUser(savedUser);
},[]);

const login = (email,password) => {
    if(email === "admin@gmail.com" && password === "admin1234"){
        const admin = {role:"admin", email};
        setUser(admin);
        localStorage.setItem("user", JSON.stringify(admin));
        return admin;
    }

    if(email === "customer@gmail.com" && password === "customer1234"){
        const customer = {role:"customer", email};
        setUser(customer);
        localStorage.setItem("user", JSON.stringify(customer));
        return customer;
    }
    alert("Invalid Credentials");
    return null;
};

const logout = () =>{
    setUser(null);
    localStorage.removeItem("user");
};
  return (
    <AuthContext.Provider value = {{
        user,
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);