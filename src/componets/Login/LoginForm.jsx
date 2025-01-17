import React from "react";
import { Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="login">Login:</label>
        <Field id="login" placeholder="Login" component={"input"} name="login" type={"text"} autoComplete="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <Field id="password" placeholder="Password" component={"input"} name="password" type={"password"} autoComplete="current-password" />
      </div>
      <div>
        <Field id="rememberMe" component={"input"} name={"rememberMe"} type={"checkbox"} />
        <label htmlFor="rememberMe">remember me</label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
