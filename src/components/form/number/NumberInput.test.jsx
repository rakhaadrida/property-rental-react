import { fireEvent, render } from "@testing-library/react";
import React from "react";
import NumberInput from "./NumberInput";

class TestNumber extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <NumberInput
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestNumber />);
  const input = container.querySelector(`input.form-control[name='value']`);

  return input;
};

describe("Form Number component", () => {
  test("Should able to change value", () => {
    const input = setup();

    fireEvent.change(input, { target: { value: 23 } });
    console.log(input.value);

    expect(input.value).toBe("23");
  });

  test("Should not able to change when reach max value", () => {
    const input = setup();

    fireEvent.change(input, { target: { value: 33 } });

    expect(input.value).not.toBe("33");
  });
});
