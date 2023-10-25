import React, { useState, useEffect } from 'react'
import img1 from '../images/first-page/eye.png'
import img2 from '../images/first-page/eye1.png'
import { Link } from 'react-router-dom';


function Header({ onFilterChange }) {
    // const [filterValue, setFilterValue] = useState("");

    const handleFilterChange = (event) => {
        const value = event.target.value;
        //   setFilterValue(value);
        onFilterChange(value); // Notify the parent component about the filter change
        console.log(value, "<----- THIS IS VALUE")
    };


    // ham burger
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  
    const toggleNav = () => {
      setIsNavOpen(prevIsNavOpen => !prevIsNavOpen);
    };
  
    const toggleSubmenu = () => {
      setIsSubmenuOpen(prevIsSubmenuOpen => !prevIsSubmenuOpen);
    };

    const handleWhishlistClick = () => {
        // Reset the navigation icon and submenu when the Whishlist link is clicked
        setIsNavOpen(false);
        setIsSubmenuOpen(false);
    };


    return (
        <div className='wrapper'>

            {/* //header  */}
            <div className="header">
                <div className="header-1">
                    <section className="h-title">
                        <span className="eye-icon">
                            <img src={img1} alt="" className="eye-icon2" />
                            <img
                                src={img2}
                                alt=""
                                className="eye-icon1"
                            />
                        </span>
                        <label htmlFor="">
                            <Link to="/">EYESOME</Link>
                        </label>
                    </section>
                    <div className="h-Filter-input">
                        <form action="" className="form-1">
                            <input type="text" placeholder="Search Glasses" onChange={handleFilterChange} />

                            <span className="h-icon">
                                <i className="fa-solid fa-magnifying-glass" />
                            </span>
                        </form>
                    </div>
                    <section className="h-options">
                        <Link to='/categories'>
                        <button className="h-btn1">Explore</button>
                        </Link>
        
                        <Link to="/whishlist/:productId">
                            <button className="h-btn2">
                                <i className="fa-regular fa-bookmark" />
                            </button>
                        </Link>
        
                        <Link to="/Cart/:productId" onClick={handleWhishlistClick}>
                            <button className="h-btn3">
                                <i className="fa-solid fa-cart-shopping" />
                            </button>
                        </Link>
                        <button className="h-btn4">
                            <div className="navbar" onClick={toggleSubmenu}>
                            <div className={`icon ${isNavOpen ? 'cross' : ''}`} onClick={toggleNav}>
                                    <span className="line" />
                                    <span className="line" />
                                    <span className="line" />
                                </div>
                            </div>
                            <div className={`submenu ${isSubmenuOpen ? 'show-submenu' : ''}`} id="submenu">
                                <Link to="/whishlist/:productId" onClick={handleWhishlistClick}>
                                    <i className="fa-regular fa-bookmark" /> Whishlist
                                </Link>
                                <Link to="/Cart/:productId" onClick={handleWhishlistClick}>
                                    <i className="fa-solid fa-cart-shopping" /> Bag
                                </Link>
                            </div>
                        </button>
                    </section>
                </div>
                <div className="header-2">
                    <form className="form2" action="">
                        <input type="text" placeholder="Search Glasses" />
                        <span className="h-icon">
                            <i className="fa-solid fa-magnifying-glass" />
                        </span>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Header