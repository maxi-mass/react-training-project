import React from 'react';
import p from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader isFetching={true}/>;
    }
    return (
        <div>
            <div>

            </div>
            <div className={p.descriptionBlock}>
                <img src={props.userProfile.photos.large} />
                <ProfileStatus status={"Hello world!!!"}/>
                <div>
                    {props.userProfile.aboutMe}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;