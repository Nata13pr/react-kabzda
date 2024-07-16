import React from 'react';

import Preloader from "../../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "../../ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateUserStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>

            <div>
                <img src={profile.photos.large} alt={'ava'}/>

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