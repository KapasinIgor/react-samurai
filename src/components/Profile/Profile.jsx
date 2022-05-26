import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.profile}>
        <div>
            <img className={s.profile_logo}
                 src='http://mahamayapaints.com/images/unsplash_brooklyn-bridge_header.jpg'/>
        </div>
        <div>
            ava + decription
        </div>
        <MyPosts/>
    </div>;
}

export default Profile;