import React, {useState} from "react";
import {profileAPI} from "../../../api/api";

const ProfileStatusWithHooks = props => {
    let [editMode, setEditMode] = useState(false);
    let [currentStatusText, setCurrentStatusText] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(currentStatusText);
    };

    const onStatusChange = (event) => {
        setCurrentStatusText(event.target.value);
    };

    return (
        <div>
            {
                !editMode && <div onDoubleClick={activateEditMode}>
                    <span>
                        Статус: {props.status}
                    </span>
                </div>
            }
            {
                editMode && <div>
                    Статус: <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deActivateEditMode}
                    value={currentStatusText}
                />
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;