import { useState, useEffect } from "react";

const ProfileStatus = ({ initialStatus, updateStatus, isOwner }) => {
  const [status, setStatus] = useState(initialStatus);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  const onEditMode = () => {
    if (!isOwner) return;
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
    <span className="status">
      {!editMode && <span onDoubleClick={onEditMode}>{status || "status empty"}</span>}
      {editMode && <input onChange={updateStatusText} autoFocus={true} onBlur={offEditMode} value={status} />}
    </span>
  );
};

export default ProfileStatus;
