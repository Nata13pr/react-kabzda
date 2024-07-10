import {Component} from "react";
import {thunk} from "redux-thunk";
import {setStatus} from "../../redux/profileReducer";

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status:this.props.status || ''
    }

    activateEditMode=()=> {
        this.setState(
            {
                editMode: true
            }
        );
    }

    deactivateEditMode=()=> {
        this.setState(
            {
                editMode: false
            }
        );
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange=(e)=>{
        this.setState(
            {
                status:e.currentTarget.value
            }
        )
    }
    render() {

        return (
            <div>
                <div>
                    {!this.state.editMode && (<span
                        onDoubleClick={this.activateEditMode}>
                        {this.props.status || 'No status'}
                    </span>)}

                </div>
                <div>
                    {this.state.editMode && (<input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status }
                        onChange={this.onStatusChange}
                    />)}
                </div>
            </div>
        )
    }
}

export default ProfileStatus;