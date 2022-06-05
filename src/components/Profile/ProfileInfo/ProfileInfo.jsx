import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div className={s.profileInfo}>
        <div>
            <img className={s.profileInfo__logo}
                 src='http://mahamayapaints.com/images/unsplash_brooklyn-bridge_header.jpg'/>
        </div>
        <div className={s.profileInfo__description}>
            ava + decription
        </div>
    </div>;
}

export default ProfileInfo;