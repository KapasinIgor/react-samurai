import React from "react";
import s from './Header.module.css'

const Header = () => {
    return <header className={s.header}>
        <img className={s.header__logo}
             alt="header"
             src='https://e7.pngegg.com/pngimages/608/962/png-clipart-columbidae-doves-as-symbols-peace-symbols-drawing-flying-hope-miscellaneous-white-thumbnail.png'/>
    </header>;
}

export default Header;