
import img10 from '../images/first-page/img-4.jpg';
import img9 from '../images/first-page/img-3.jpg';
import img8 from '../images/first-page/img-2.jpg';
import headimg from '../images/first-page/img-1.png';
import { Link, Outlet } from 'react-router-dom';
import productsData from '../Data/Productdata.json';
import { useState } from 'react';


function Home({ filterValue }) {


  const products = productsData.products;




  return (

    <div className="wrapper">

      {/* container1 */}
      <div className="container1">
        <div className="container1-1">
          <div className="container1-1-inner-wrapper">
            <h1>Glasses &amp; Lens</h1>
            <p>
              Buy the best high-quality sunglasses from us. <br />
              More than 100 types of assortment.
            </p>
            <div className="container1-1-button">
              <button className="container1-btn1"><Link to="/categories">Start Shopping</Link></button>
              <button className="container1-btn2">
                Explore More <i className="fa-solid fa-arrow-turn-down" />
              </button>
            </div>
          </div>
        </div>
        <div className="container1-2">
          <img src={headimg} alt="lens-img" />
        </div>
      </div>
      {/* container2 */}
      <div className="container2">
        <div className="c2-box trending-product">
          <h1 className="c2-heading"> Trending Products</h1>
        </div>

        {/* .filter((item) => item?.name?.toLowerCase().includes(searchText)) */}
        {products && products.filter((product) =>
          product.name.toLowerCase().includes(filterValue.toLowerCase())
        ).map((product) => (

          <div className="c2-box">
           
            <div className="c2-details">
              <div className="c2-details1">
                <h3 className="c2-product-name">{product.name}</h3>
              </div>
              <div className="c2-details2">
                <h3 className="c2-product-price">
                  {product.price}
                  <Link
                    to={`/product-detail/${product.id}`}
                    className="c2-add-btn"
                  >
                    <img src={product.addtocart} alt="Add to Cart" />
                  </Link>
                </h3>
                <span className="c2-product-type">{product.type}</span>
              </div>
            </div>
            <div className="c2-product">
              <img src={product.image} alt="" />
            </div>
          </div>
        ))}

        {/* categories */}
        <div className="categories">
          <div className="categories-h">Categories</div>
          <div className="categories-box">
            <div className="categories-box1 categories-inn-box">
              <Link to={`/categories?selectedCategory=Vision`}>
                <img src={img8} alt="categories-img1" />
                <label htmlFor="">Vision</label>
              </Link>
            </div>
            <div className="categories-box2 categories-inn-box">
              <Link to={`/categories?selectedCategory=Sports`}>
                <img src={img9} alt="Image 3" />
                <label htmlFor="">Sports</label>
              </Link>
            </div>
            <div className="categories-box3 categories-inn-box">
              <Link to="/categories?selectedCategory=Sunglasses">
                <img src={img10} alt="categories-img3" />
                <label htmlFor="">Sunglasses</label>
              </Link>

            </div>
          </div>
        </div>
        <footer>Eyesome made with 💜 by Himanshu</footer>
      </div>
    </div>
  )
}

export default Home