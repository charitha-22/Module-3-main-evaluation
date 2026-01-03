
import React, { useEffect, useState } from 'react'
import ReataurantCard from '../components/ReataurantCard'

const CustomerDashboard = () => {
    const [data, setData] = useState([]);
    const loadData = ()=>{
       const stored =  JSON.parse(localStorage.getItem("evalData")) ||[];
    setData(stored)
    }

    useEffect(()=>{
        loadData();
    },[])
  return (
    <div>
    <h2>Customer</h2>
    {data.map((r) => (
    <ReataurantCard
    //  key= {r.restaurantId}
      data = {r}
      isAdmin={false}
      />
    ))}

    </div>
  )
}

export default CustomerDashboard