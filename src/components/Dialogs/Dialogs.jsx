import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messagesData.map(m => <DialogMessage message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__itemsWrap}>
                { dialogsElements }
            </div>
            <div className={s.dialogs__messagesWrap}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;