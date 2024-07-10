import {Component} from "react";
import {thunk} from "redux-thunk";

class ProfileStatus extends Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState(
            {editMode: true}
        );
    }

    deactivateEditMode() {
        this.setState(
            {editMode: false}
        );
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode && (<span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>)}

                </div>
                <div>
                    {this.state.editMode && (<input onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>)}
                </div>
            </div>
        )
    }
}

export default ProfileStatus;