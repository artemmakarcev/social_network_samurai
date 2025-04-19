import { Field, reduxForm } from "redux-form";
import styles from "./ProfileInfo.module.css";
import { Input } from "../../Common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const editContactForm = ({ profileData, status, isOwner, toggleEditMode, handleSubmit }) => {
  return (
    <form className={styles.information} onSubmit={handleSubmit}>
      <h3>About me</h3>
      <div className={styles.blockInfo}>
        <label>My name is: </label>
        <Field component={Input} name="fullName" placeholder="Enter your name" initialvalues="123" initialize="asdf" validate={[requiredField]} />
        <label>Job status: </label>
        <Field component={Input} type="checkbox" name="lookingForAJob" placeholder="Enter looking for a job" validate={[requiredField]} />
        <label>Description: </label>
        <Field component={Input} name="lookingForAJobDescription" placeholder="Enter skills" validate={[requiredField]} />
        <label>About me: </label>
        <Field component={Input} name="aboutMe" placeholder="Enter about you" validate={[requiredField]} />
      </div>
      <h3>Social networks</h3>

      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profileData.contacts).map((key) => {
          return (
            <div key={key}>
              <b>
                {key}: <Field component={Input} name={"contacts." + key} placeholder="Enter about you" validate={[requiredField]} />
              </b>
            </div>
          );
        })}
      </div>
      {isOwner ? (
        <button key="saveContact" onClick={toggleEditMode}>
          Save
        </button>
      ) : (
        ""
      )}
    </form>
  );
};

// const AddMessageForm = ({handleSubmit}) => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <Field component={TextArea} name="newMessageText" placeholder="Enter your message" validate={[requiredField, maxLength50]} />
//       </div>
//       <div>
//         <button>Send message</button>
//       </div>
//     </form>
//   );
// };

const ProfileDataForm = reduxForm({ form: "contactInfo" })(editContactForm);

export default ProfileDataForm;
