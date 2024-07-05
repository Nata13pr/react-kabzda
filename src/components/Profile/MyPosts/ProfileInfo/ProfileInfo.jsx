import React from 'react';
import Preloader from "../../../../common/preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://historickarevue.com/wp-content/uploads/2021/07/4693513.jpg'
                    alt={'hero'}/>
            </div>

            <div>
                <img src={props.profile.photos.large} alt={'ava'}/>
                <h2>{props.profile.fullName}</h2>
                <h3>{props.profile.aboutMe}</h3>
                <ul>
                    <h3>Contacts</h3>
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.github}</li>
                    <li>{props.profile.contacts.insagram}</li>
                    <li>{props.profile.contacts.mainLink}</li>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.website}</li>
                    <li>{props.profile.contacts.youtube}</li>
                </ul>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;