import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { useState } from 'react';
function Navbar() {
  const [activeCategory, setActiveCategory] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen); // Toggle the navbar visibility
  };
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand zeeshan-text" href="#">Zeeshan Movie Studio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark offcanvas-width" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Movies Store</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li className="dropdown-item item"> <Link
            active={activeCategory === 'mystery'}
            to="mystery"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleCategoryClick('mystery')}
          >
            Mystery
          </Link></li>
                    <li className="dropdown-item" > <Link
            active={activeCategory === 'thriller'}
            to="thriller"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleCategoryClick('thriller')}
          >
            Thriler
          </Link></li>
                    <li className="dropdown-item" > <Link
            active={activeCategory === 'war'}
            to="war"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleCategoryClick('war')}
          >
            War
          </Link></li>
                    <li className="dropdown-item" > <Link
            active={activeCategory === 'fantasy'}
            to="fantasy"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleCategoryClick('fantasy')}
          >
            Fantasy
          </Link></li>
                    <li className="dropdown-item"> <Link
            active={activeCategory === 'animated'}
            to="animated"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleCategoryClick('animated')}
          >
            Animated
          </Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
