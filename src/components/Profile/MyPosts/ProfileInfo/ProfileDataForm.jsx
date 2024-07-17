import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from './ProfileInfo.module.css';
import style from "../../../../common/FormControls/FormsControls.module.css";

const ProfileDataForm = ({ profile, saveProfile, setEditMode }) => {
    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Required'),
        lookingForAJob: Yup.boolean(),
        lookingForAJobDescription: Yup.string().required('Required'),
        aboutMe: Yup.string().required('Required'),
        contacts: Yup.object().shape({
            facebook: Yup.string().url('Invalid URL format').nullable(),
            website: Yup.string().url('Invalid URL format').nullable(),
            vk: Yup.string().url('Invalid URL format').nullable(),
            twitter: Yup.string().url('Invalid URL format').nullable(),
            instagram: Yup.string().url('Invalid URL format').nullable(),
            youtube: Yup.string().url('Invalid URL format').nullable(),
            github: Yup.string().url('Invalid URL format').nullable(),
            mainLink: Yup.string().url('Invalid URL format').nullable()
        })
    });

    const onSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            await saveProfile(values);
            setEditMode(false);
        } catch (error) {
            setErrors({ general: error.toString() });
        }
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{
                fullName: profile.fullName || '',
                lookingForAJob: profile.lookingForAJob || false,
                lookingForAJobDescription: profile.lookingForAJobDescription || '',
                aboutMe: profile.aboutMe || '',
                contacts: profile.contacts || {}
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting, errors }) => (
                <Form>
                    <div><button type="submit" disabled={isSubmitting}>Save</button></div>
                    {errors.general && <div className={style.formSummaryError}>
                        {errors.general}
                    </div>}
                    <div>
                        <b>Full name</b>: <Field type="text" name="fullName" />
                        <ErrorMessage name="fullName" component="div" className={style.error} />
                    </div>
                    <div>
                        <b>Looking for a job</b>: <Field type="checkbox" name="lookingForAJob" />
                        <ErrorMessage name="lookingForAJob" component="div" className={style.error} />
                    </div>
                    <div>
                        <b>My professional skills</b>: <Field as="textarea" name="lookingForAJobDescription" />
                        <ErrorMessage name="lookingForAJobDescription" component="div" className={style.error} />
                    </div>
                    <div>
                        <b>About me</b>: <Field as="textarea" name="aboutMe" />
                        <ErrorMessage name="aboutMe" component="div" className={style.error} />
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => (
                        <div key={key} className={s.contact}>
                            <b>{key}: <Field type="text" name={`contacts.${key}`} /></b>
                            <ErrorMessage name={`contacts.${key}`} component="div" className={style.error} />
                        </div>
                    ))}
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default ProfileDataForm;