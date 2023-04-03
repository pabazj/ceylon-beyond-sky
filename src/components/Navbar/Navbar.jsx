import React, { useState } from 'react'
import { menuItems } from './menuItems'
import Menu from './Menu'
import { CgMenu } from 'react-icons/cg';

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
                    <h2>Ceylon Beyond Sky</h2>

                </div>
                <div className='hamburger-menu' onClick={handleClick}>
                    <CgMenu />
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
