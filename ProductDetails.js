import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import productsData from '../Data/Productdata.json';






function ProductDetails() {



    const { productId } = useParams();
    const product = productsData.products.find(p => p.id.toString() === productId);
  
    if (!product) {
      return <div>Product not found</div>;
    }

  return (
   <div className="wrapper">
  <div className="a_i_p_container">
    <div className="inner_a_i_p_container">
      <div className="a_i_p_box1">
      <img src={product.image} alt="" />
      </div>
      <div className="a_i_p_box2">
        <h1 className="a_i_p_heading">{product.name}</h1>
        <p className="a_i_p_text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
        <label htmlFor="" className="a_i_p_rating">
          <i className="fa-solid fa-star" style={{ color: "#d4ff00" }} />
          <i className="fa-solid fa-star" style={{ color: "#d4ff00" }} />
          <i className="fa-solid fa-star" style={{ color: "#d4ff00" }} />
          <i className="fa-solid fa-star" style={{ color: "#d4ff00" }} />
          <i className="fa-solid fa-star" style={{ color: "#d4ff00" }} />
          (4.5) Rating
        </label>
        <div className="a_i_p_aboutproduct">
          <h3 className="a_i_p_heading2">About Product</h3>
          <div className="a_i_p_container">
            <span>
              <label htmlFor="">
                Brand: <span>Ray-Ban</span>
              </label>
              <label htmlFor="">
                Category: <span>{product.type}</span>
              </label>
            </span>
            <span>
              <label htmlFor="">
                Gender:<span>Men</span>
              </label>
              <label htmlFor="">
                Heavy: <span>200g</span>
              </label>
            </span>
          </div>
        </div>
        <div className="a_i_p_price">
          Price:
          <label htmlFor="">₹{product.discountPrice}</label>
          <span>{product.price}</span>
        </div>
        <div className="a_i_p_btn">
          <a href="" className="a_i_p_btn1">
            <i className="fa-solid fa-cart-shopping" /> Add to Bag
          </a>
          <a href="" className="a_i_p_btn2">
            <i className="fa-regular fa-bookmark" /> Wishlist Item
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductDetails