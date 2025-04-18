import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      <select
        onChange={handleChange}
        className="inline-block px-4 py-2 duration-200 hover:bg-blue-100 rounded-full hover:text-black"
      >
        <option value="">Product</option>
        <option value="/product/more1">Products</option>
        <option value="/product/more2">Vitamins</option>
        <option value="/product/more3">Feed Supplements</option>
        
        
      </select>




    </>
  );
}

export default Product;