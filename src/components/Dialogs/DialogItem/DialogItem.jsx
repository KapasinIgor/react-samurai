import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id}
                 className={Data => Data.isActive ? s.dialogs__itemActive : s.dialogs__item}>{props.name}<br/></NavLink>
    )
}
export default DialogItem;