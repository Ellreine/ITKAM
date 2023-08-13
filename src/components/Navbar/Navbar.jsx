import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
const navLinkClasses = (navData) => (navData.isActive ? s.active : s.item);
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.items}>
                <li className={s.item}>
                    <NavLink className={navLinkClasses} to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={navLinkClasses} to="/messages">
                        Messages
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={navLinkClasses} to="/news">
                        News
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={navLinkClasses} to="/music">
                        Music
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={navLinkClasses} to="/settings">
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
