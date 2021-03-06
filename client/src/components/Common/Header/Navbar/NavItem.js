import { NavLink } from 'react-router-dom';

function NavItem({
    link,
    text,
}) {
    return (
        <li>
            <NavLink to={link} exact className="nav-link" activeClassName='active-nav-link'>{text}</NavLink>
        </li>
    )
}

export default NavItem;