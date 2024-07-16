import styles from './FormsControls.module.css';

export const FormControl = ({touched, error, children}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Textarea = ({field, form, ...props}) => {
    const {touched, errors} = form;
    const hasError = touched[field.name] && errors[field.name];

    return (
        <FormControl touched={touched[field.name]} error={errors[field.name]}>
            <textarea {...field} {...props} />
        </FormControl>
    );
};
export const Input = ({field, form, ...props}) => {
    const {touched, errors} = form;
    const hasError = touched[field.name] && errors[field.name];

    return (
        <FormControl touched={touched[field.name]} error={errors[field.name]}>
            <input {...field} {...props} />
        </FormControl>
    );
};
