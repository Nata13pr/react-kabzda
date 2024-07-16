import React from "react";
import s from './ProfileInfo.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from "../../../../common/FormControls/FormsControls.module.css";

const ProfileSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    lookingForAJob: Yup.boolean(),
    lookingForAJobDescription: Yup.string().required('Description is required'),
    aboutMe: Yup.string().required('About me is required'),
    contacts: Yup.object().shape({
        // Define validation for contact fields as needed
    })
});

const ProfileDataForm = ({ initialValues, profile, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ProfileSchema}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
                onSubmit(values).catch(error => {
                    setFieldError('_error', error);
                }).finally(() => {
                    setSubmitting(false);
                });
            }}
        >
            {({ isSubmitting, errors }) => (
                <Form>
                    <div><button type="submit" disabled={isSubmitting}>save</button></div>
                    {errors._error && <div className={style.formSummaryError}>
                        {errors._error}
                    </div>}
                    <div>
                        <b>Full name</b>:
                        <Field type="text" name="fullName" placeholder="Full name" />
                        <ErrorMessage name="fullName" component="div" />
                    </div>
                    <div>
                        <b>Looking for a job</b>:
                        <Field type="checkbox" name="lookingForAJob" />
                        <ErrorMessage name="lookingForAJob" component="div" />
                    </div>
                    <div>
                        <b>My professional skills</b>:
                        <Field as="textarea" name="lookingForAJobDescription" placeholder="My professional skills" />
                        <ErrorMessage name="lookingForAJobDescription" component="div" />
                    </div>
                    <div>
                        <b>About me</b>:
                        <Field as="textarea" name="aboutMe" placeholder="About me" />
                        <ErrorMessage name="aboutMe" component="div" />
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.contact}>
                            <b>{key}:</b>
                            <Field type="text" name={`contacts.${key}`} placeholder={key} />
                            <ErrorMessage name={`contacts.${key}`} component="div" />
                        </div>
                    })}
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default ProfileDataForm;