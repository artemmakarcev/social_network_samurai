import { reduxForm } from "redux-form";
import { login } from "../../reducers/auth/authReducer";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators/validators";
import styles from "./../Common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <Field id="email" placeholder="email" component={Input} name="email" type={"text"} autoComplete="username" validate={[requiredField]} />
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
        <label htmlFor="rememberMe">remember me</label>
        <Field id="rememberMe" component={Input} name={"rememberMe"} type={"checkbox"} />
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = ({ login, isAuth }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
  };
  if (isAuth) return <Navigate to={"/profile"} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth };
};

export default connect(mapStateToProps, { login })(Login);
