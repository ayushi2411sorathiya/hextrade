import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isGalleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleGalleryMouseEnter = () => {
    setGalleryDropdownOpen(true);
  };

  const handleGalleryMouseLeave = () => {
    setGalleryDropdownOpen(false);
  };

  const closeMenu = () => {
    setShowMenu(false);
};


  return (
    <>
      <header className="sticky-header">
    <div className="container">
        <div className="navbar">
          <div className="logo" style={{ height: "70px" }}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`menu-icon ${showMenu ? 'open' : ''}`}></div>
          </div>
          <ul className={`nav-items ${showMenu ? 'show' : ''}`}>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active"  onClick={closeMenu}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeClassName="active" onClick={closeMenu}>About</NavLink>
            </li>
            <li
              className="nav-item"
              onMouseEnter={handleGalleryMouseEnter}
              onMouseLeave={handleGalleryMouseLeave}
            >
              <NavLink to="/gallery" activeClassName="active" onClick={closeMenu}>Gallery</NavLink>
              {/* {isGalleryDropdownOpen && (
                <ul className="dropdown-menu">
                  <Link to="/gallery/category1"> <li>Category 1</li></Link>
                  <Link to="/gallery/category2"> <li>Category 2</li></Link>
                  <Link to="/gallery/category3"> <li>Category 3</li></Link>
                </ul>
              )} */}
            </li>
            <li
              className="nav-item"
              onMouseEnter={handleGalleryMouseEnter}
              onMouseLeave={handleGalleryMouseLeave}
            >
              <a  onClick={closeMenu}>Products</a>
              {isGalleryDropdownOpen && (
                <ul className="dropdown-menu">
               <Link to="/products/food/products"> <li>Food Products </li></Link>
                  <Link to="/products/building/materials"> <li>Building Materials  </li></Link>
                  <Link to="/products/fertilisers"> <li>Fertilisers</li></Link>
                  {/* <Link to="/gallery/category1"> <li>Agriculture & Food </li></Link>
                  <Link to="/gallery/category2"> <li>Apparel, Textile & Accessories</li></Link>
                  <Link to="/gallery/category3"> <li>Automobiles & Accessories</li></Link>
                  <Link to="/gallery/category3"> <li>Bags, Shoes & Accessories</li></Link>
                  <Link to="/gallery/category3"> <li>Electronics</li></Link>
                  <Link to="/gallery/category3"> <li>Electrical Equipment, Components & Telecoms</li></Link>
                  <Link to="/gallery/category3"> <li>Gifts, Sports & Toys</li></Link>
                  <Link to="/gallery/category3"> <li>Health & Beauty</li></Link>
                  <Link to="/gallery/category3"> <li>Home, Lights & Consutruction</li></Link>
                  <Link to="/gallery/category3"> <li>Machinery, Industrial Parts & Tools</li></Link>
                  <Link to="/gallery/category3"> <li>Metallurgy, Chemicals, Rubber & Plastics</li></Link>
                  <Link to="/gallery/category3"> <li>Packaging & Advertising & Office</li></Link> */}
                </ul>
              )}
            </li>

            <li className="nav-item">
              <NavLink to="/service" activeClassName="active" onClick={closeMenu}>Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
      </header>
    </>

  );
};

export default Header;

