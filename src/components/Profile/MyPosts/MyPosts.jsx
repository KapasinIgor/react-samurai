import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            MyPosts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Привет задрот!' likeCount='15'/>
                <Post message='Как дела?' likeCount='3'/>
                <Post message='Всё огонь...' likeCount='8'/>
            </div>
        </div>)
}

export default MyPosts;