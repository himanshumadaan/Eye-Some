import React, { useState, useEffect } from 'react'
import CategoriesData from '../Data/Categories.json'
import { Link, useLocation } from 'react-router-dom';


function Categories({ filterValue }) {
  const productsAllData = CategoriesData.products
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 4999]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  //radio button
  const [selectedRating, setSelectedRating] = useState(0);

  // filter
  const [isFilterBoxVisible, setIsFilterBoxVisible] = useState(false);


  const resetFilters = () => {
    setSelectedGender('all');
    setSelectedPriceRange([0, 4999]);
    setSelectedCategories([]);
    setSelectedRating(0);
  };

  const toggleFilterBox = () => {
    setIsFilterBoxVisible(!isFilterBoxVisible);
  };



  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };


  //sorting low to high and high to low
  const [selectedSortingOption, setSelectedSortingOption] = useState('sortbyprice');

  const handleSortingChange = (e) => {
    setSelectedSortingOption(e.target.value);
    console.log('Selected Sorting Option:', e.target.value);
  };




  // default check  page of vision sunglasses and sports
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('selectedCategory');
  console.log(selectedCategories , "selectedCategories");

  useEffect(() => {
    if (selectedCategory) {
      setSelectedCategories([selectedCategory]);
    }
  }, [selectedCategory]);








  return (
    <div className="wrapper">


      {/* second page container1(s-p-container1) */}
      <div className="s-p-container1" id="s-p-container1">
        <img src="../images/second-page/img1.jpg" alt="" />
      </div>
      {/* second page container2(s-p-c2) */}
      <div className="s-p-c2">
        <div className="s-p-inner-c2-1">
          <label htmlFor="">Glasses for You!</label>
        </div>
        <div className="s-p-inner-c2-2">
          <select
            className="s-p-c2-select"
            name="cars"
            id="cars"
            value={selectedSortingOption}
            onChange={handleSortingChange}
          >
            <option value="sortbyprice">Sort By Price</option>
            <option value="lowToHigh">Low To High</option>
            <option value="highToLow">High To Low</option>
          </select>

          <button className="s-p-c2-btn" onClick={toggleFilterBox}>
            <a href="#">
              <i className="fa-solid fa-sort" />
              Filter
            </a>
          </button>
        </div>
      </div>
      {/* second page container3(s-p-c3)  */}
      <div className="s-p-c3">


        {productsAllData && productsAllData.filter((product) =>
          product.name.toLowerCase().includes(filterValue.toLowerCase())
        ).filter((product) => {

          const productPrice = parseFloat(product.price);
          // Apply gender and price range filters
          if (
            (selectedGender === 'all' || product.gender === selectedGender) &&
            productPrice >= selectedPriceRange[0] &&
            productPrice <= selectedPriceRange[1] &&
            (selectedCategories.length === 0 || selectedCategories.includes(product.categories))
          ) {
            if (selectedRating === 0) {
              // Show all products if "Any Rating" is selected
              return true;
            } else if (selectedRating === 3) {
              return parseFloat(product.rating) < 3;
            } else if (selectedRating === 4) {
              return parseFloat(product.rating) < 4;
            } else if (selectedRating === 5) {
              return parseFloat(product.rating) < 5;
            }
          }
          return false;
        }).filter((product) => {
          // Apply gender filter if selectedGender is not 'all'
          if (selectedGender === 'all' || product.gender === selectedGender) {
            return true;
          }
          return false;
        }).sort((a, b) => {
          console.log('Sorting:', selectedSortingOption);
          if (selectedSortingOption === 'lowToHigh') {
            const diff = parseFloat(a.price) - parseFloat(b.price);
            console.log('Difference:', diff);
            return diff;
          } else if (selectedSortingOption === 'highToLow') {
            const diff = parseFloat(b.price) - parseFloat(a.price);
            console.log('Difference:', diff);
            return diff;
          }
          return 0; // Default sorting (by ID or no sorting)
        }).map((product) => (
          <div className="s-p-c3-box" key={product.id}>
            <div className="s-p-c3-image-box">
              <Link
                to={`/categories-detail/${product.id}`}

              >
                <img
                  className="s-p-c3-img"
                  src={product.image}
                  alt="product-image"
                /></Link>
            </div>
            <div className="s-p-c3-detailsbox">
              <div className="s-p-c3-details">
                <div className="s-p-c3-details1">
                  <h3 className="s-p-c3-productname">{product.name}</h3>
                  <label htmlFor="">
                    {product.rating}
                    <i className="fa-solid fa-star" style={{ color: "#d4ff00" }} />
                    <span>Rating</span>
                  </label>
                </div>
                <div className="s-p-c3-details2">
                  <div className="s-p-c3-discounted-price">{product.discountPrice}</div>
                  <div className="s-p-c3-price">{product.price}</div>
                </div>
              </div>
              <div className="s-p-c3-Product-type">{product.type}</div>
              <div className="s-p-c3-buttons">
                <button className="s-p-c3-addtocart">
                  <a href="">Add to Bag</a>
                </button>
                <button className="s-p-c3-save">
                  <a href="">
                    <i className="fa-regular fa-bookmark" />
                  </a>
                </button>
              </div>
            </div>
          </div>

        ))}

        <button className="down-to-up-btn" id="scrollToTopButton">
          <i className="fa-solid fa-angle-up" />
        </button>
        {/*  filter box */}


        {isFilterBoxVisible && (
          <div className={`filter-box ${isFilterBoxVisible ? '' : 'remove-filter-box'}`} id="filter-box">
            <div className="filter-header">
              <h1>Filter Products</h1>
              <a href="#" onClick={toggleFilterBox}>
                <i className="fa-solid fa-xmark" />
              </a>
            </div>
            <button onClick={resetFilters}>Clear</button>
            <div className="gender-box filter-container">
              <h3 className="filter-heading">Gender</h3>
              <div className="gender-inner-box">
                <button className={`gender-btn ${selectedGender === 'all' ? 'clicked-gender-btn' : ''}`}
                  onClick={() => setSelectedGender('all')}>All</button>
                <button className={`gender-btn ${selectedGender === 'male' ? 'clicked-gender-btn' : ''}`}
                  onClick={() => setSelectedGender('male')}>Men</button>
                <button className={`gender-btn ${selectedGender === 'women' ? 'clicked-gender-btn' : ''}`}
                  onClick={() => setSelectedGender('women')}>Women</button>
                <button className={`gender-btn ${selectedGender === 'unisex' ? 'clicked-gender-btn' : ''}`}
                  onClick={() => setSelectedGender('unisex')}>Unisex</button>
              </div>
            </div>
            <div className="price-range filter-container">
              <h3 className="price-range-heading filter-heading">Price Range</h3>
              <input
                type="range"
                className="filter-range"
                min="0"
                max="4999"
                step="1"
                value={selectedPriceRange[1]} // Use the upper bound of the range
                onChange={(e) => setSelectedPriceRange([0, parseFloat(e.target.value)])}
              />
              <div className="range-number">
                <span>0</span>
                <span>2000</span>
                <span>4999</span>
              </div>
            </div>
            <div className="categories filter-container">
              <h3 className="categories-heading filter-heading">Categories</h3>
              <input
                type="checkbox"
                checked={selectedCategories.includes('Vision')}
                onChange={() => handleCategoryChange('Vision')}
              />
              <label>Vision</label> <br />
              <br />
              <input
                type="checkbox"
                checked={selectedCategories.includes('Sunglasses')}
                onChange={() => handleCategoryChange('Sunglasses')}
              />
              <label>Sunglasses</label> <br />
              <br />
              <input
                type="checkbox"
                checked={selectedCategories.includes('Sports')}
                onChange={() => handleCategoryChange('Sports')}
              />
              <label>Sports</label>
            </div>



            <div className="rating filter-container">
              <h3 className="rating-heading filter-heading">Rating.</h3>
              <div className="filter-radio-btn-container">
                <span>
                  <input
                    name="star"
                    type="radio"
                    checked={selectedRating === 0}
                    onChange={() => setSelectedRating(0)}
                  />
                  <label htmlFor="">Any Rating</label>
                </span>
                <span>
                  <input name="star" type="radio" checked={selectedRating === 3}
                    onChange={() => setSelectedRating(3)} />
                  <label htmlFor="">3 Stars &amp; below</label>
                </span>

                <span>
                  <input name="star" type="radio" checked={selectedRating === 4}
                    onChange={() => setSelectedRating(4)} />
                  <label htmlFor="">4 Stars &amp; below</label>
                </span>

                <span>
                  <input name="star" type="radio" checked={selectedRating === 5}
                    onChange={() => setSelectedRating(5)} />
                  <label htmlFor="">5 Stars &amp; below</label>
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>

  )
}

export default Categories