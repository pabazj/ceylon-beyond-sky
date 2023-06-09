import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Dropdown from './Dropdown';
import { BsChevronDown } from 'react-icons/bs'
import './navbar.css'

const Menu = ({ items, handleClick, showMenu , setShowMenu}) => {

  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false)
  const [prevItems, setPrevItems] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (prevItems !== items) {
      setPrevItems(items);
    }
  }, [items]);

  useEffect(() => {
    setIsSubMenuVisible(false);
    setActiveItem(null);
  }, [location.pathname]);

  const handleMouseEnter = (item) => {
      setActiveItem(item);
      setIsSubMenuVisible(true);
   
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
    setIsSubMenuVisible(false);
  };

  const handleOnClick =(item) => {
    
    if(showMenu) {
      setActiveItem(item);
      setIsSubMenuVisible(!isSubMenuVisible);
    }
    
  }

  const handleLinkClick= () => {
    setShowMenu(false)
   
  }

  return (
    <li onMouseEnter={() => handleMouseEnter(items)} onMouseLeave={handleMouseLeave} onClick={() => handleOnClick(items)} >
      <Link to={items.submenu ? '/' : items.url} className='text-link'  onClick={items.submenu ? null : handleLinkClick}>
        <span> {items.title === 'Contact Us' ? <button className="button" >Make My Trip</button> : <b>{items.title} </b>}</span>
        {items.submenu && <BsChevronDown />}
      </Link >
      {items.submenu && activeItem === items &&(
        <Dropdown submenus={items.submenu} isSubMenuVisible={isSubMenuVisible} setShowMenu={setShowMenu} />
      )}
    </li>
  );
};

export default Menu;