import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
  const [status, setStatus] = useState(props.status);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onEditMode = () => {
    setEditMode(true);
  };
  const offEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const updateStatusText = (event) => {
    setStatus(event.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={onEditMode}>Status: {status || "No status"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input autoFocus onChange={updateStatusText} onBlur={offEditMode} type="text" value={status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
