const TextArea = ({
  label = "",
  labelClassName = "",
  errorMessage = "",
  errorClassName = "",
  value = "",
  onChange = () => {},
  placeholder = "",
  className = "",
}: {
  label?: string;
  labelClassName?: string;
  errorMessage?: string;
  errorClassName?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  className?: string;
}) => {
  if (label || errorMessage) {
    return (
      <div className="flex flex-col gap-1">
        {label && <label className={labelClassName}>{label}</label>}
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
        />
        {errorMessage && <span className={errorClassName}>{errorMessage}</span>}
      </div>
    );
  }

  // simple textarea
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default TextArea;
