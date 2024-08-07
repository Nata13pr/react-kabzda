import React, {useState} from 'react';

import Preloader from "../../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "../../ProfileStatusWithHooks";
import userPhoto from '../../../../assets/image/user.png';
import s from './ProfileInfo.module.css';
import ProfileDataForm from "./ProfileDataForm";
import {useDispatch} from "react-redux";

const ProfileInfo = ({profile, status, updateUserStatus,saveProfile,isOwner,savePhoto}) => {
const [editMode,setEditMode] = useState(false);

    const dispatch = useDispatch();
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected=(e)=>{
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    const handleSubmit = async (formData) => {
        try {
            await dispatch(saveProfile(formData));
            setEditMode(false);
        } catch (error) {
            console.error(error);
        }
    };
    return (
            <div>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                { editMode
                    ? <ProfileDataForm profile={profile} saveProfile={handleSubmit} setEditMode={setEditMode} />
                    : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }

                <ProfileStatusWithHooks status={status} updateStatus={updateUserStatus}/>

            </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;