import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import { setUserProfile } from "../../reducers/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    // if (!profileId) {
    // }
    profileId = 29435;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`, {
        withCredentials: true,
        headers: { "API-KEY": "9ce35fb9-4b2e-4384-b0e6-46701c1199b4" },
      })
      .then((response) => {
        console.log(response.data);
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile}></Profile>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let mapDispatchToProps = {
  setUserProfile,
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
