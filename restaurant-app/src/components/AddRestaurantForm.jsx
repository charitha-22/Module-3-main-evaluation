import React from 'react'

const AddRestaurantForm = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem("evalData")) || [];

        const newRest = {
            restaurantId: Date.now(),
            restaurantName: e.target.name.value,
            address: e.target.address.value,
            type: e.target.taype.value,
            parkingLot: e.target.parking.value === "true",
            image: e.target.image.value
        };

        data.push(newRest);
        localStorage.setItem("evalData", JSON.stringify(data));
        alert("Restaurant Added");
        refresh();
        e.target.reset();
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Enter Name' required />
        <input type="text" name="address" placeholder='Enter Address' required />
        <select name="type">
        <option value={"Rajasthan"}>Rajasthan</option>
        <option value={"Gujarath"}>Gujarath</option>
        <option value={"Mughlai"}>Mughlai</option>
        <option value={"Jain"}>Jain</option>
        <option value={"Thai"}>Thai</option>
        <option value={"North Indian"}>North Indian</option>
        <option value={"South Indian"}>South Indian</option>
        </select>

        <select name="parking">
            <option value="true">Parking Available</option>
            <option value="false">No Parking</option>
        </select>
        <input type="image" src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg" alt="image" />
        <button type='submit'>Add</button>
    </form>
    </>
  )
}

export default AddRestaurantForm