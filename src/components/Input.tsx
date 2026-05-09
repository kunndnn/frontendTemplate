const Input = ({
  label = "",
  labelClassName = "",
  errorMessage = "",
  errorClassName = "",
  type = "text",
  value = "",
  onChange = () => {},
  placeholder = "",
  className = "",
  disabled = false,
  maxLength = 50,
}: {
  label?: string;
  labelClassName?: string;
  errorMessage?: string;
  errorClassName?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
}) => {
  if (label || errorMessage) {
    return (
      <div className="flex flex-col gap-1">
        {label && <label className={labelClassName}>{label}</label>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
          disabled={disabled}
          maxLength={maxLength}
        />
        {errorMessage && <p className={errorClassName}>{errorMessage}</p>}
      </div>
    );
  }

  // simple input
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      maxLength={maxLength}
    />
  );
};

export default Input;
