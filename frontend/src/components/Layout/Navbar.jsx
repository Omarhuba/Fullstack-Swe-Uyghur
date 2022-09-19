import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Modules/layout/Navbar.scss";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <div>
      <div className="wrapper">
        <div className="logo">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            SU
            <i className="fab fa-typo3" />
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/album" className="nav-links" onClick={closeMobileMenu}>
              Pictures
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <i className="far fa-light fa-user"> Login </i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

// import React,{useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import { Button } from '../UI/Button';

// export const Navbar = () => {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//       if (window.innerWidth <= 960) {
//         setButton(false);
//       } else {
//         setButton(true);
//       }
//     };

//     useEffect(() => {
//       showButton();
//     }, []);

//     window.addEventListener('resize', showButton);

//     return (
//       <>
//         <nav className='navbar'>
//           <div className='navbar-container'>
//             <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//               TRVL
//               <i className='fab fa-typo3' />
//             </Link>
//             <div className='menu-icon' onClick={handleClick}>
//               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//             </div>
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//               <li className='nav-item'>
//                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                   Home
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link
//                   to='/album'
//                   className='nav-links'
//                   onClick={closeMobileMenu}
//                 >
//                   Pictures
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link
//                   to='/products'
//                   className='nav-links'
//                   onClick={closeMobileMenu}
//                 >
//                   Products
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to='/sign-up'
//                   className='nav-links-mobile'
//                   onClick={closeMobileMenu}
//                 >
//                   Sign Up
//                 </Link>
//               </li>
//             </ul>
//             {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//           </div>
//         </nav>
//       </>
//     );
// }

// import React, { useState, useEffect } from "react";
// import { Button } from "../UI/Button";
// import { Link } from "react-router-dom";
// import "../../Modules/layout/Navbar.css";

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if (window.innerWidth <= 960) {
//             setButton(false);
//         } else {
//             setButton(true);
//         }
//     };

//     useEffect(() => {
//         showButton();
//     }, []);

//     window.addEventListener("resize", showButton);

//     return (
//         <>
//             <nav className="navbar">
//                 <div className="navbar-container">
//                     <div className="logo">
//                         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//                             TRVL
//                             <i className="fab fa-typo3" />
//                         </Link>
//                     </div>
//                     <div className="menu-icon" onClick={handleClick}>
//                         <i className={click ? "fas fa-times" : "fas fa-bars"} />
//                     </div>
//                     <div className="navbar-items">
//                         <ul className={click ? "nav-menu active" : "nav-menu"}>
//                             <li className="nav-item">
//                                 <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link
//                                     to="/services"
//                                     className="nav-links"
//                                     onClick={closeMobileMenu}
//                                 >
//                                     Services
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link
//                                     to="/products"
//                                     className="nav-links"
//                                     onClick={closeMobileMenu}
//                                 >
//                                     Products
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link
//                                     to="/products"
//                                     className="nav-links"
//                                     onClick={closeMobileMenu}
//                                 >
//                                     Login
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;
