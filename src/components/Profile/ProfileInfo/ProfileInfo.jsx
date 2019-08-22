import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="data:image/jpeg;base64,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" />
            </div>
            <div className={p.descriptionBlock}>
                ava + desc
            </div>
        </div>
    );
};

export default ProfileInfo;