import { useState, useEffect } from "react";

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
    <div className="status">
      {!editMode && (
        <div>
          <span onDoubleClick={onEditMode}>{status || "status empty"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input onChange={updateStatusText} autoFocus={true} onBlur={offEditMode} value={status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
