import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({ input, meta: { touched, error }, children, ...props }) => {
  const isError = touched && error;
  return (
    <div className={styles.formControl + " " + (isError ? styles.error : "")}>
      <div>
        {/* <textarea {...input} {...props} /> */}
        {children}
      </div>
      {isError && <span>{error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
