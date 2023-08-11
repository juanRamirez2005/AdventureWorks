import React from "react";

const Inputs = (props) => {
  const { span, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = React.useState(false);
  function handleFocus(e) {
    setFocused(true);
  }
  return (
    <label>
      <span>{span}</span>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      <span className="error-message">{errorMessage}</span>
    </label>
  );
};

export { Inputs };
