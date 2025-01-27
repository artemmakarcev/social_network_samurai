import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const isError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + " " + (isError ? styles.error : "")}>
      <div>
        {/* <textarea {...input} {...props} /> */}
        {props.children}
      </div>
      {isError && <span>{meta.error}</span>}
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
