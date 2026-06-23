import { useState, type ChangeEvent } from "react";
import "./TextInput.scss";

type TextInputType = "text" | "email" | "tel" | "password" | "number";

interface TextInputProps {
  id: string;
  name: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  prepend?: string | number;
  append?: string | number;
  type?: TextInputType;
  placeholder?: string;
  outerClassName?: string;
  inputClassName?: string;
  errorResponse?: string;
}

const TextInput = ({
  id,
  name,
  value,
  onChange,
  prepend,
  append,
  type = "text",
  placeholder = "Please type here...",
  outerClassName,
  inputClassName,
  errorResponse = "Please match the requested format.",
}: TextInputProps) => {
  const [hasError, setHasError] = useState<string | null>(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pattern = type === "tel" ? "[0-9]*" : undefined;

  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (type === "email") {
      setHasError(emailRegex.test(inputValue) ? null : errorResponse);
    }

    if (type === "tel" && !event.target.validity.valid) {
      return;
    }

    onChange(event);
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          pattern={pattern}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={onChangeEvent}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {hasError && <span className="error-helper">{hasError}</span>}
    </div>
  );
};

export default TextInput;
