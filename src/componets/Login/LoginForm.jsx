import React from "react";
import { Field } from "redux-form";
import { Input } from "../Common/FormsControls/FromsControls";
import { requiredField } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="login">Login:</label>
        <Field id="login" placeholder="Login" component={Input} name="login" type={"text"} autoComplete="username" validate={[requiredField]} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <Field
          id="password"
          placeholder="Password"
          component={Input}
          name="password"
          type={"password"}
          autoComplete="current-password"
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field id="rememberMe" component={Input} name={"rememberMe"} type={"checkbox"}/>
        <label htmlFor="rememberMe">remember me</label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
