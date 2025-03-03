import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getStatus, getUserProfile, updateStatus } from "../../reducers/profile/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getIsAuth, getProfilePage, getStatusPage, getUserId } from "../../reducers/profile/profileSelectors";

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

const ProfileContainer = props => {
  useEffect(() => {
    let profileId = props.router.params.userId;

    if (!profileId) {
      profileId = props.authorizedUserId;

      if (!profileId) {
        props.history.push("/login");
      }
    }

    props.getUserProfile(profileId);
    props.getStatus(profileId);
  }, []);
  return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}></Profile>;
};

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
