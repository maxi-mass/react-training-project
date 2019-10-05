import React from "react";
import styles from "./FormsControls.module.css";

export const Textarea  = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched;
    return <div className={styles.error && hasError}>
        <div>
            <textarea {...input} {...props}/>
        </div>
        {hasError && <div className={styles.red}>{meta.error}</div>}
    </div>;
};