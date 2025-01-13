import React from "react";

let newStatusElement = React.createRef();
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
  };

  updateStatusText = () => {
    let text = newStatusElement.current.value;
    this.status = text;
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.onEditMode}>Status: {this.status || this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus
              ref={newStatusElement}
              onChange={this.updateStatusText}
              onBlur={this.offEditMode}
              type="text"
              value={this.status || this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
