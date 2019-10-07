import React from "react";
import styles from "./FormsControls.module.css";

export const FormControl  = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched;
    return <div className={hasError && styles.error}>
        <div>
            {props.children}
        </div>
        {hasError && <div className={styles.red}>{meta.error}</div>}
    </div>;
};

export const Textarea  = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
};

export const TextInput  = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
};