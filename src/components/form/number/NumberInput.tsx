import { useState } from "react";
import "./NumberInput.scss";

interface NumberProps {
  value: string | number;
  onChange: (e: { target: { name: string; value: number } }) => void;
  placeholder?: string;
  outerClassName?: string;
  name?: string;
  min?: number;
  max?: number;
  prefix?: string;
  suffix?: string;
  isSuffixPlural?: boolean;
}

const NumberInput = ({
  value,
  onChange,
  placeholder,
  outerClassName = "",
  name = "",
  min = 1,
  max = 1,
  prefix = "",
  suffix = "",
  isSuffixPlural = false,
}: NumberProps) => {
  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onInputChange = (e: any) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix, "");
    if (suffix) value = value.replace(suffix, "");

    const patternNumeric = new RegExp("^\\d*$");
    const isNumeric = patternNumeric.test(value);
    const numeric = Number(value);

    if (isNumeric && numeric <= max && numeric >= +min) {
      onChange({
        target: {
          name: name,
          value: numeric,
        },
      });

      setInputValue(
        `${prefix}${value}${suffix}${isSuffixPlural && +value > 1 ? "s" : ""}`,
      );
    }
  };

  const minus = () => {
    +value > min &&
      onInputChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    +value < max &&
      onInputChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          inputMode="numeric"
          pattern="[\d]*"
          className="form-control"
          placeholder={placeholder || "0"}
          value={`${String(inputValue)}`}
          onChange={onInputChange}
          readOnly
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
