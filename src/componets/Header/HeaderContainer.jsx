import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, login, logout } from "../../reducers/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login,
  logout,
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
