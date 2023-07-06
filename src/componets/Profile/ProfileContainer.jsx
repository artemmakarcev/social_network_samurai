import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
