import React, {useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = React.useState(false);
    const [status, setStatus] = React.useState(props.status);

    useEffect(() => {
        setStatus(props.status || '')
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)

    }

    const deactivatedEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivatedEditMode}
                           value={status}
                    />
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;