import { reduxForm } from "redux-form";
import { login } from "../../reducers/auth/authReducer";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators/validators";
import styles from "./../Common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && <Field id="captcha" component={Input} name="captcha" validate={[requiredField]} />}
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (isAuth) return <Navigate to={"/profile"} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, captchaUrl: state.auth.captchaUrl });

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
