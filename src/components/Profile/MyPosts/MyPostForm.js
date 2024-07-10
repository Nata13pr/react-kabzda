import React from 'react';
import {Field, Form, Formik} from "formik";
import {Textarea} from "../../../common/FormControls/FormControls";
import * as Yup from "yup";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const validationSchema = Yup.object().shape({
    myMessage: Yup.string().required('Required').max(50, 'Must be 50 characters or less'),
});

const MyPostForm = (props) => {
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{myPost: ''}}
            onSubmit={(values, {resetForm}) => {
                console.log(values);
                props.onSubmit(values);
                resetForm();
            }}
        >
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Field name="myPost"
                               placeholder="Write new post"
                               component={Textarea}
                               validate={[required, maxLength50]}
                        />
                    </div>
                    <button type="submit">Login</button>
                </Form>
            )}
        </Formik>

    )
};

export default MyPostForm;