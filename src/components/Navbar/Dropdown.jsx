import { Link } from 'react-router-dom'
import './navbar.css'
const Dropdown = ({ submenus, isSubMenuVisible, setShowMenu}) => {

  const handleLinkClick= () => {
    setShowMenu(false)
  }
    return (
      <ul  style={{ display: isSubMenuVisible ? 'block' : 'none' }}>
        {submenus && submenus.map((submenu, index) => (
          <li key={index}>
             <Link to={submenu.url} className='text-link'  onClick={handleLinkClick}><b>{submenu.title}</b></Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;