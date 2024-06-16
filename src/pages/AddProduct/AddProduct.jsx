
import { useState } from "react"
import Navbar from "../Home/Components/Navbar/Navbar"

import './AddProduct.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const AddProduct = () => {
  const navigate = useNavigate()
  
 const [data,setData]= useState({
        productName:"",
        productDescription:"",
        productMaterial:"",
        productImage :""
 })
 const handleChange=(e)=>{
  const {name,value}=e.target
  setData({
    ...data,
    [name] :value
  })

 }
const addProduct =async(e)=>{
  e.preventDefault()
  const response= await axios.post("https://64a5007a00c3559aa9bee6f9.mockapi.io/products/",data)
  if(response.status==201){
    toast.success("Product Added Successfully !!")
    navigate("/")
  }else{
    toast.error("something went wrong.please try again")
  }

}
  return (
     <>
    <Navbar />
<div className="form">
  <h2>Product Information</h2>
  <form onSubmit={addProduct}>
    
    <label htmlFor="productImage">Product Image:</label>
    <input type="text" id="productImage" placeholder="Enter Image URL" name="productImage" accept="text/*" onChange={handleChange} />

    <label htmlFor="productName">Product Name:</label>
    <input type="text" id="productName" name="productName" required onChange={handleChange} />

    <label htmlFor="productDescription">Product Description:</label>
    <textarea id="productDescription" name="productDescription" rows="4" required onChange={handleChange}></textarea> 

    <label htmlFor="productMaterial">Product Materials:</label>
    <input type="text" id="productMaterial" name="productMaterial" required onChange={handleChange}/>
    <button type="submit">Submit</button>
  </form>
</div>
    </>
  )
}

export default AddProduct
