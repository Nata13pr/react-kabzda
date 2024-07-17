import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../../common/FormControls/FormControls";
import styles from "./../../common/FormControls/FormsControls.module.css";

const maxLength50 = maxLengthCreator(50);

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Required').max(25, 'Must be 25 characters or less'),
    password: Yup.string().required('Required').max(25, 'Must be 25 characters or less'),
    captcha: Yup.string(), // додайте валідацію для captcha, якщо потрібно
});

const LoginForm = (props) => {
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }} // додайте captcha в initialValues
            onSubmit={(values, { setErrors, resetForm }) => {
                props.onSubmit(values, setErrors);
                resetForm();
            }}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Field name="email"
                               placeholder="Login"
                               component={Input}
                               validate={[required, maxLength50]}
                               autoComplete="current-name"
                        />
                    </div>
                    <div>
                        <Field
                            autoComplete="current-password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            component={Input}
                            validate={[required, maxLength50]}
                        />
                    </div>
                    <div>
                        <Field
                            name="rememberMe"
                            type="checkbox"
                            component={Input}
                        />
                        <label htmlFor="rememberMe">
                            Remember me
                        </label>
                    </div>
                    {props.captchaUrl &&
                        <div>
                            <img src={props.captchaUrl} alt="captcha" />
                            <Field
                                name="captcha"
                                placeholder="Symbols from image"
                                component={Input}
                                validate={required}
                            />
                        </div>
                    }
                    {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
                    <button type="submit">Login</button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
