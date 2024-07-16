import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const validationSchema = Yup.object().shape({
    myMessage: Yup.string().required('Required').max(50, 'Must be 50 characters or less'),
});

const DialogsForm = (props) => {
    return (
        <Formik
            initialValues={{myMessage: ''}}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                props.onSubmit(values);
                resetForm();
            }}
        >
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="myMessage"
                            placeholder="Write your message"
                            component={Textarea}
                            validate={[required, maxLength50]}
                        />
                    </div>
                    <button type="submit">Send message</button>
                </Form>
            )}
        </Formik>
    );
};

export default DialogsForm;
