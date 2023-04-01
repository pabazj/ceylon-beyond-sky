import React from 'react'
import { menuItems } from './menuItems'
import Menu from './Menu'

import './navbar.css'

function Navbar() {

    return (
        <>
            <nav  className='navbar'>
            <div className='logo'>
                <h2>Ceylon Beyond Sky</h2>
            </div>
                <ul>
                {menuItems && menuItems.map((menu, index) => (
                                <Menu items={menu} key={index} />
                        ))}

                </ul>
            </nav>
        </>
    )
}

export default Navbar
