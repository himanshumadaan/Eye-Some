import React, { useState } from 'react'
import Home from '../Component/Home'
import Categories from '../Component/Categories'
import ProductDetails from '../Component/ProductDetails'
import CategoriesDetails from '../Component/CategoriesDetails'
import Whishlist from '../Component/Whishlist'
import Cart from '../Component/Cart'
import { Route, Routes } from 'react-router-dom'

const PrivateRoutes = ({filterValue}) => {
    // lazy loading 
    
    return (
        <Routes>
            <Route path="/" element={<Home filterValue={filterValue} />} />
            <Route path="/categories" element={<Categories filterValue={filterValue} />} />
            <Route path="/product-detail/:productId" element={<ProductDetails />} />
            <Route path="/categories-detail/:productId" element={<CategoriesDetails />} />
            <Route path="/whishlist/:productId" element={<Whishlist />} />
            <Route path="/Cart/:productId" element={<Cart />} />
        </Routes>
    )
}

export default PrivateRoutes