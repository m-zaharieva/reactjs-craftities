import { useState } from 'react';
import {NavLink} from 'react-router-dom';

import './NavItem.css';

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className='nav-item'>
            <NavLink exact to={props.link} className="nav-link" activeClassName={!props.isActive ? "active-nav-link" : ""} onClick={() => setOpen(!open)}>
                {props.text} {props.icon}
            </NavLink>

            {open && props.children}
        </li>
    );
}

export default NavItem;