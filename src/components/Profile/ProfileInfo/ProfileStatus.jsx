import React, { useState, useEffect } from "react";

const ProfileStatus = ({ initialStatus, updateStatus }) => {
  const [status, setStatus] = useState(initialStatus);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  const onEditMode = () => {
    setEditMode(true);
  };
  const offEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };
  const updateStatusText = (event) => {
    setStatus(event.currentTarget.value);
  };
  return (
    <div>
      <p className="status" onDoubleClick={onEditMode}>
        Status:
        {!editMode ? <span>{status}</span> : <input autoFocus onChange={updateStatusText} onBlur={offEditMode} type="text" value={status} />}
      </p>
    </div>
  );
};

export default ProfileStatus;
