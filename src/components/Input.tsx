import React, { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  errorMessage?: string;
  errorClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = "",
      labelClassName = "",
      errorMessage = "",
      errorClassName = "",
      className = "",
      ...props
    },
    ref
  ) => {
    if (label || errorMessage) {
      return (
        <div className="flex flex-col gap-1">
          {label && <label className={labelClassName}>{label}</label>}
          <input ref={ref} className={className} {...props} />
          {errorMessage && (
            <p className={`text-red-500 text-sm mt-1 ${errorClassName}`}>
              {errorMessage}
            </p>
          )}
        </div>
      );
    }

    // simple input
    return <input ref={ref} className={className} {...props} />;
  }
);

Input.displayName = "Input";

export default Input;
