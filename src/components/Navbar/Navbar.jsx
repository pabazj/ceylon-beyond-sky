import React ,{useState, useEffect} from 'react';
import './navbar.css'

import { Link } from 'react-scroll'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'


function Navbar() {
  
    const [open, setOpen] = useState(false)

  return (
    
    <nav name='home' className='navbar'>
            <div className='logo'>
                <h2>Ceylon Beyond Sky</h2>
            </div>
            <ul className={!open ? "mobile-menu" : "nav-menu"}>
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='about' smooth={true} duration={500} ><li>About</li></Link>
                <Link to='packages' smooth={true} duration={500} ><li>Packages</li></Link>
                <Link to='activities' smooth={true} duration={500} ><li>Activities</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='contact' smooth={true} duration={500} ><li>Contact</li></Link>
            </ul>

            <div className="hamburger-menu"> 
              { open ? <CgClose onClick={() => setOpen(false)}/> : <AiOutlineMenu onClick={() => setOpen(true)}/> }
            </div>

        </nav>
  )
}

export default Navbar
