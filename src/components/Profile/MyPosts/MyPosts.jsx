import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={s.posts__wrap}>
            <h3>MyPosts</h3>
            <div className={s.newPost}>
                <textarea></textarea>
                <br/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>)
}

export default MyPosts;