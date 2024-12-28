import React from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const Friends = () => {
  return <div>Friends</div>;
};

export default compose(withAuthRedirect)(Friends);
