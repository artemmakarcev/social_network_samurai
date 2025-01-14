import React from "react";

class ProfileStatus extends React.Component {
  state = {
    status: this.props.status,
    editMode: false,
  };

  onEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  offEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  updateStatusText = (event) => {
    this.setState({
      status: event.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.onEditMode}>Status: {this.state.status || "No status"}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus onChange={this.updateStatusText} onBlur={this.offEditMode} type="text" value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
