import React from "react";

import { useCartButton } from "./cart-button.hook";
import { render } from "@testing-library/react";
import { CartButton } from "./cart-button.component";
import { TESTS_IDS } from "./cart-button.constants";

jest.mock("./cart-button.hook", () => ({
  useCartButton: jest.fn(),
}));

const mockActions = {
  handleGetTotal: jest.fn(),
};

(useCartButton as jest.Mock).mockImplementation(() => ({
  actions: mockActions,
}));

const mockProps = {
  onClick: jest.fn(),
};

describe("CartButton", () => {
  it("should render the CartButton component", () => {
    const { getByTestId } = render(<CartButton {...mockProps} />);

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const cartText = getByTestId(TESTS_IDS.CART_TEXT);

    expect(container).toBeInTheDocument();
    expect(cartText).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", () => {
    const { getByTestId } = render(<CartButton {...mockProps} />);

    const container = getByTestId(TESTS_IDS.CONTAINER);

    container.click();

    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
