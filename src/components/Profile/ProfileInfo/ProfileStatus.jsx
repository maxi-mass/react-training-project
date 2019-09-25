import React from "react";
import {usersAPI} from "../../../api/api";

class ProfileStatus extends React.Component {
    componentDidMount = () => {
        this.setState({
            newStatusText: this.props.status
        })
    }

    state = {
        editMode: false,
        newStatusText: ""
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deActivateEditMode = (event) => {
        this.setState({
            editMode: false
        });
        usersAPI.setStatus(this.state.newStatusText).then(response => {
            console.log(response);
        })
    };

    onStatusChange = (event) => {
        this.setState({
            newStatusText: event.target.value
        })
    }
    
    render = () => {
        return (
            <div>
                {
                    !this.state.editMode && <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.state.newStatusText}
                        </span>
                    </div>
                }
                {
                    this.state.editMode && <div>
                        <input 
                            autoFocus={true}
                            onChange={this.onStatusChange} 
                            onBlur={this.deActivateEditMode} 
                            value={this.state.newStatusText}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;