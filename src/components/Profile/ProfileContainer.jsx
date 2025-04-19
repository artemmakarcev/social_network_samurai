import { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getStatus, getUserProfile, savePhoto, saveProfileData, updateStatus } from "../../reducers/profile/profileReducer";
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
      profileData={props.profileData}
      isOwner={!props.router.params.userId}
      status={props.status}
      updateStatus={props.updateStatus}
      savePhoto={props.savePhoto}
      saveProfileData={props.saveProfileData}
    ></Profile>
  );
};

const mapStateToProps = (state) => ({
  profileData: getProfilePage(state),
  status: getStatusPage(state),
  authorizedUserId: getUserId(state),
  isAuth: getIsAuth(state),
});

const mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfileData,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileContainer);
