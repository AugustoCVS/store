import React from "react";
import { Button } from "./button.component";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { TESTS_IDS } from "./button.constants";

const mockProps = {
  onClick: jest.fn(),
  disabled: false,
};

describe("Cart Button Component", () => {
  it("should render the button correctly", () => {
    const { getByTestId } = render(<Button {...mockProps} />);

    const container = getByTestId(TESTS_IDS.BUTTON_CONTAINER);
    const text = getByTestId(TESTS_IDS.BUTTON_TEXT);

    expect(container).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", () => {
    const { getByTestId } = render(<Button {...mockProps} />);

    const container = getByTestId(TESTS_IDS.BUTTON_CONTAINER);

    act(() => {
      fireEvent.click(container);
    });

    waitFor(() => {
      expect(mockProps.onClick).toHaveBeenCalled();
    });
  });

  it("should not call the onClick function when disabled", () => {
    const { getByTestId } = render(<Button {...mockProps} disabled />);

    const container = getByTestId(TESTS_IDS.BUTTON_CONTAINER);

    act(() => {
      fireEvent.click(container);
    });

    waitFor(() => {
      expect(mockProps.onClick).not.toHaveBeenCalled();
    });
  });
});
