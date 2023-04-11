import React, { useState } from 'react'
import { menuItems } from './menuItems'
import Menu from './Menu'
import { CgMenu, CgClose } from 'react-icons/cg';

import Logo from '../../assets/logo.png'

import './navbar.css'

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);


    const handleClick = () => {
        setShowMenu(!showMenu);
    };


    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                <img src={Logo} />
                <div className="logo-text">
                <h2 className='animate-charcter'>Ceylon Beyond Sky</h2>
                
                <p >Land like no other</p>
                </div>
                   
                </div>
                <div className='hamburger-menu' onClick={handleClick}>
                   {showMenu ? <CgClose size={24} /> :  <CgMenu size={24} />}
                </div>

                <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
                    {menuItems && menuItems.map((menu, index) => (
                        <Menu items={menu} key={index} handleClick={handleClick} showMenu={showMenu} setShowMenu={setShowMenu} />
                    ))}

                </ul>
            </nav>
        </>
    )
}

export default Navbar
