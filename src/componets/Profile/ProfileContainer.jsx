import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getStatus, getUserProfile, updateStatus } from "../../reducers/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getIsAuth, getProfilePage, getStatusPage, getUserId } from "../../Selectors/profileSelectors";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
      if (!props.isAuth) {
        navigate("/login");
      }
    }, [props.isAuth, navigate]);

    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = this.props.authorizedUserId;
      if (!profileId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(profileId);
    this.props.getStatus(profileId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}></Profile>;
  }
}

const mapStateToProps = (state) => ({
  profile: getProfilePage(state),
  status: getStatusPage(state),
  authorizedUserId: getUserId(state),
  isAuth: getIsAuth(state),
});

const mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileContainer);
