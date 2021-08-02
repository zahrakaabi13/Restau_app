import {Nav, Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom"
import logo from '../images/logo.png'
import React, { useState } from 'react'

export const NavbarMenu = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);


    return (
        <Navbar collapseOnSelect fixed="top" className={colorChange ? 'navbar colorChange' : 'navbar'}>
                 <Link to="/" className="linked--brand ml-auto">
                     <img className="logo" src={logo} alt=""/>
                </Link>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link className="linked--page" to="/">Home</Link>
                        <Link className="linked--page" to="/Poilane/Shop">Shop</Link>
                        <Link className="linked--page" to="/Poilane/About">About</Link>
                        <Link className="linked--page" to="/Poilane/WatchedList">Contact us</Link>
                        <div className="d-flex search-box">
                            <input type="text" placeholder="search"/>
                            <button  className="search-btn"><box-icon name='search-alt-2' color='#000000'></box-icon></button>
                        </div>
                        <Link className="shppiing-bag" to="/Favorite"><span className="favorite--value"></span></Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
    )
}