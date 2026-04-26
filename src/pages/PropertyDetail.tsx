import { useState } from "react";
import NumberInput from "../components/form/number/NumberInput";

const PropertyDetail = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <NumberInput
      max={30}
      suffix=" night"
      name="value"
      onChange={handleChange}
      value={value}
      isSuffixPlural
    />
  );
};

export default PropertyDetail;
