import React from "react";
import s from './NavMenu.module.css'

const NavMenu = () => {
    return <nav className={s.nav}>
        <div className={s.nav_items}>
            <a href="/profile">Profile</a>
        </div>
        <div className={s.nav_items}>
            <a href="/dialogs">Messages</a>
        </div>
        <div className={s.nav_items}>
            <a href="/News">News</a>
        </div>
        <div className={s.nav_items}>
            <a href="/music">Music</a>
        </div>
        <div className={s.nav_items}>
            <a href="/settings">Settings</a>
        </div>
    </nav>;
}

export default NavMenu;