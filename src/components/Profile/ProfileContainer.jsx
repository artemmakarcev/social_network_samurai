import { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getStatus, getUserProfile, savePhoto, updateStatus } from "../../reducers/profile/profileReducer";
import { compose } from "redux";
import { getIsAuth, getProfilePage, getStatusPage, getUserId } from "../../reducers/profile/profileSelectors";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "../../hoc/withRouter";

const ProfileContainer = (props) => {
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
  }, [props.router.params.userId]);
  return (
    <Profile
      {...props}
      isOwner={!props.router.params.userId}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      savePhoto={props.savePhoto}
    ></Profile>
  );
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
  savePhoto,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileContainer);
