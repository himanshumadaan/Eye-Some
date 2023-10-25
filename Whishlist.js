import React from 'react'
import Categories from '../Data/Categories.json';
import { useParams } from 'react-router-dom';


function Whishlist() {


  return (
    <div className="wrapper">
        <div className="empty-box">
            <img src="../images/whishlist/img1.gif" alt="" />
            <h3 className="empty-box-text1">NOTHING TO SHOW!</h3>
            <p className="empty-box-text2">
            Unlock Your Shopping Desires: Fill Your Empty Wishlist
            </p>
        </div>
    </div>
  )
}

export default Whishlist