import React from 'react'

const ReataurantCard = ({data, isAdmin, onDelete, onUpdate}) => {
    console.log(data);
  return (
    <>
    <img src={data.image} alt="" width="150" />
    <h3>{data.restaurantName}</h3>
    <p>{data.address}</p>
    <p>{data.type}</p>
    <p>{data.parkingLot ? "Parking Available" : "No Parking"}</p>

    {isAdmin && (
        <>
        <button onClick={()=>onUpdate(data)}>Update</button>
        <button onClick={()=>onDelete(data.restaurant.id)}>Delete</button>
        </>
    )}
    </>
  )
}

export default ReataurantCard