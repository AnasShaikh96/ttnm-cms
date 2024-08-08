import React from "react";

const Input = React.forwardRef<HTMLInputElement>(({
  className, type, label, error
}) => {
  return <input />;
});

export { Input };
