import React from "react";
import s from './NavMenu.module.css'
import {NavLink} from "react-router-dom";

const NavMenu = () => {
    return (
        <nav className={s.nav}>
            <div className={s.nav__items}>
                <NavLink to="/profile" className={Data => Data.isActive ? s.nav__linkActive : s.nav__link} >Profile</NavLink>
            </div>
            <div className={s.nav__items}>
                <NavLink to="/dialogs" className={Data => Data.isActive ? s.nav__linkActive : s.nav__link} >Dialogs</NavLink>
            </div>
            <div className={s.nav__items}>
                <NavLink to="/News" className={Data => Data.isActive ? s.nav__linkActive : s.nav__link}>News</NavLink>
            </div>
            <div className={s.nav__items}>
                <NavLink to="/music" className={Data => Data.isActive ? s.nav__linkActive : s.nav__link} >Music</NavLink>
            </div>
            <div className={s.nav__items}>
                <NavLink to="/settings" className={Data => Data.isActive ? s.nav__linkActive : s.nav__link} >Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavMenu;