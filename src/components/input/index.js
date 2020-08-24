import React, { useState } from "react";
import style from "./input.module.css";

export default function Input({
  value,
  error = "",
  placeholder = "placeholder",
  onChange = () => {},
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={style.input_container}>
      <div className={style.input_label}>
        {(isFocused || value) && placeholder}
      </div>
      <input
        value={value}
        placeholder={isFocused ? "" : placeholder}
        onChange={(e) => onChange(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      <span className={style.error_msg}>
        <p>{error}</p>
      </span>
    </div>
  );
}
