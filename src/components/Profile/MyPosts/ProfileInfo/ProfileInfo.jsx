import React from 'react';
import Preloader from "../../../../common/preloader/Preloader";
import ProfileStatus from "../../ProfileStatus";

const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://historickarevue.com/wp-content/uploads/2021/07/4693513.jpg'*/}
            {/*        alt={'hero'}/>*/}
            {/*</div>*/}

            <div>
                <img src={props.profile.photos.large} alt={'ava'}/>
                <ProfileStatus status={props.status}  updateUserStatus={props.updateUserStatus}/>
                <h2>{props.profile.fullName}</h2>
                <h3>{props.profile.aboutMe}</h3>
                <ul>
                    <h3>Contacts</h3>
                    <li>Facebook - {props.profile.contacts.facebook}</li>
                    <li>Github - {props.profile.contacts.github}</li>
                    <li>Instagram - {props.profile.contacts.instagram}</li>
                    <li>MainLink - {props.profile.contacts.mainLink}</li>
                    <li>Twitter - {props.profile.contacts.twitter}</li>
                    <li>Website - {props.profile.contacts.website}</li>
                    <li>Youtube - {props.profile.contacts.youtube}</li>
                </ul>
                <p>Looking for a job - {props.profile.lookingForAJob ? 'yes' : 'no'}</p>
                <p>Job description - {props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;