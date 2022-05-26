import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <div>
                    <img className={s.item_ava}
                         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpKrz1fzI6gL5mjQUq28klQf78ze3z1pZ1g&usqp=CAU'/>
                </div>
                <span className={s.item_like}>like!</span> {props.likeCount}
            </div>
            <div>{props.message}</div>
        </div>
    )

}

export default Post;