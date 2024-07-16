import React from 'react';

import Preloader from "../../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "../../ProfileStatusWithHooks";
import userPhoto from '../../../../assets/image/user.png';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({profile, status, updateUserStatus,isOwner,savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected=(e)=>{
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>

            <div>
                <img src={profile.photos.large  || userPhoto} alt={'ava'} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateUserStatus}/>
                <h2>{profile.fullName}</h2>
                <h3>{profile.aboutMe}</h3>
                <ul>
                    <h3>Contacts</h3>
                    <li>Facebook - {profile.contacts.facebook}</li>
                    <li>Github - {profile.contacts.github}</li>
                    <li>Instagram - {profile.contacts.instagram}</li>
                    <li>MainLink - {profile.contacts.mainLink}</li>
                    <li>Twitter - {profile.contacts.twitter}</li>
                    <li>Website - {profile.contacts.website}</li>
                    <li>Youtube - {profile.contacts.youtube}</li>
                </ul>
                <p>Looking for a job - {profile.lookingForAJob ? 'yes' : 'no'}</p>
                <p>Job description - {profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;