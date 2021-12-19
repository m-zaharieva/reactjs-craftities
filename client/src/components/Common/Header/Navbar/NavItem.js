import { NavLink } from 'react-router-dom';

function NavItem({
    link,
    text,
    logout
}) {
    return (
        <li>
            <NavLink to={link} className="nav-link" activeClassName='active-nav-link' onClick={text == 'Logout' && logout}>{text}</NavLink>
        </li>
    )
}

export default NavItem;