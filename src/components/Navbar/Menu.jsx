import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Dropdown from './Dropdown';
import { BsChevronDown } from 'react-icons/bs'
import './navbar.css'

const Menu = ({ items, handleClick }) => {

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

  return (
    <li onMouseEnter={() => handleMouseEnter(items)} onMouseLeave={handleMouseLeave}>
      <Link to={items.submenu ? '/' : items.url} className='text-link'>
        <span> {items.title} </span>
        {items.submenu && <BsChevronDown />}
      </Link >
      {items.submenu && activeItem === items &&(
        <Dropdown submenus={items.submenu} isSubMenuVisible={isSubMenuVisible} />
      )}
    </li>
  );
};

export default Menu;