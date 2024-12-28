import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../reducers/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = 29435;
    }
    this.props.getUserProfile(profileId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile}></Profile>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let mapDispatchToProps = {
  getUserProfile,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileContainer);
