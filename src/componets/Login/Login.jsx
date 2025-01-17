import React from "react";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import { login } from "../../reducers/authReducer";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    login(formData.login, formData.password, formData.rememberMe);
  };
  if (props.isAuth) return <Navigate to={"/profile"} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

function mapStateToProps(state) {
  return { isAuth: state.auth.isAuth };
}

export default connect(mapStateToProps, { login })(Login);
