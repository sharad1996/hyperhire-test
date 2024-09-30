import { forwardRef } from "react";

const Label = ({ srOnly, displayName, ...props }) => {
  return (
    // eslint-disable-next-line
    <label {...props}>{displayName}</label>
  );
};

export default Label;
