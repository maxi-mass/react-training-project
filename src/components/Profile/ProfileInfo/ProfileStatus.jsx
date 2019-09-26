import React from "react";
import {usersAPI} from "../../../api/api";

class ProfileStatus extends React.Component {
    componentDidMount = () => {
        usersAPI.getStatus(this.props.userId).then(status => {
            this.setState({
                currentStatusText: status
            })
        });
    };

    state = {
        editMode: false,
        currentStatusText: ""
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
        usersAPI.setStatus(this.state.currentStatusText);
    };
    enterPress = (event) => {
        if(event.charCode == 13) {
            this.setState({
                editMode: false
            });
            usersAPI.setStatus(this.state.currentStatusText);          
        }
    };

    onStatusChange = (event) => {
        this.setState({
            currentStatusText: event.target.value
        })
    };
    
    render = () => {
        return (
            <div>
                {
                    !this.state.editMode && <div>
                        <span onDoubleClick={this.activateEditMode}>
                            Статус: {this.state.currentStatusText}
                        </span>
                    </div>
                }
                {
                    this.state.editMode && <div>
                        Статус: <input
                            autoFocus={true}
                            onChange={this.onStatusChange} 
                            onBlur={this.deActivateEditMode}
                            onKeyPress={this.enterPress} 
                            value={this.state.currentStatusText}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;