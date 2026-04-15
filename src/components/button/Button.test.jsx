import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { MemoryRouter } from "react-router-dom";

describe("Button component", () => {
  test("Should not allowed to click button when isDisabled is present", () => {
    const { container } = render(<Button isDisabled></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
  });

  test("Should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>);

    expect(getByText("Loading...")).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  test("Should render <a> tag>", () => {
    const { container } = render(<Button type="link" isExternal></Button>);

    expect(container.querySelector("a")).toBeInTheDocument();
  });

  test("Should render <Link> component>", () => {
    const { container } = render(
      <MemoryRouter>
        <Button type="link" href="">
          Test Link
        </Button>
      </MemoryRouter>,
    );

    expect(container.querySelector("a")).toBeInTheDocument();
  });
});
