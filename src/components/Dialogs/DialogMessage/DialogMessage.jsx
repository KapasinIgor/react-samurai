import React from "react";
import s from './DialogMessage.module.css'

const DialogMessage = (props) => {
    return (
        <div className={s.dialogs__message}>{ props.message }</div>
    )
}

export default DialogMessage;