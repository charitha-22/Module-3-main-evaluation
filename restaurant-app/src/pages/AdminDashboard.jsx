import React, { useEffect, useState } from 'react'
import AddRestaurantForm from '../components/AddRestaurantForm'
import ReataurantCard from '../components/ReataurantCard'

const AdminDashboard = () => {
    const [data, setData] = useState()
    const loadData = ()=>{
       const stored =  JSON.parse(localStorage.getItem("evalData")) |[];
    setData(stored)
    }

    useEffect(()=>{
        loadData();
    },[])

    const handleDelete = (id) =>{
        if(!window.confirm("Are you sure to delete ?")) return;

        const updated = data.filter((r) => r.restaurantId !== id);
        localStorage.setItem("evalData", JSON.stringify(updated));
        alert("Resraurant deleted");
        setData(updated);
    };
    
  return (
    <>
    <AddRestaurantForm refresh = {loadData} />

    {data.map(r)}
    <ReataurantCard
     key= {r.restaurant.id}
      data = {r}
      isAdmin={true}
      onDelete={handleDelete}
      onUpdate={()=>Navigate("/admin/dashboard", {state:r})}
      />
    </>
  )
}

export default AdminDashboard