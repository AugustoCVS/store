import React, { use } from "react";
import { render, act, fireEvent, waitFor } from "@testing-library/react";

import { useCart } from "./cart.hook";
import { MockProducts } from "@/src/mocks/products";
import { Cart } from "./cart.component";
import { TESTS_IDS } from "./cart.constants";

jest.mock("./cart.hook", () => ({
  useCart: jest.fn(),
}));

const mockStates = {
  products: MockProducts,
};

const mockActions = {
  handleIncreaseQuantity: jest.fn(),
  handleDecreaseQuantity: jest.fn(),
  handleGetTotal: jest.fn(),
  handleRemoveProduct: jest.fn(),
  handleBuyProducts: jest.fn(),
};

(useCart as jest.Mock).mockImplementation(() => ({
  states: mockStates,
  actions: mockActions,
}));

const mockProps = {
  handleCloseTheCart: jest.fn(),
};

describe("Cart", () => {
  it("should render the cart component", () => {
    const { getByTestId } = render(<Cart {...mockProps} />);

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const content = getByTestId(TESTS_IDS.CONTENT);
    const ctaWrapper = getByTestId(TESTS_IDS.CTA_WRAPPER);

    expect(container).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(ctaWrapper).toBeInTheDocument();
  });

  it("should call handleCloseTheCart when clicking on the header button", () => {
    const { getByTestId } = render(<Cart {...mockProps} />);

    const headerButton = getByTestId(TESTS_IDS.HEADER_BUTTON);

    act(() => {
      fireEvent.click(headerButton);
    });

    waitFor(() => {
      expect(mockProps.handleCloseTheCart).toHaveBeenCalled();
    });
  });

  it("should call handleIncreaseQuantity when clicking on the plus button", () => {
    const { getAllByTestId } = render(<Cart {...mockProps} />);

    const { actions } = useCart();

    const ctaPlus = getAllByTestId(TESTS_IDS.CTA_PLUS)[0];

    act(() => {
      fireEvent.click(ctaPlus);
    });

    waitFor(() => {
      expect(actions.handleIncreaseQuantity).toHaveBeenCalled();
    });
  });

  it("should call handleDecreaseQuantity when clicking on the minus button", () => {
    const { getAllByTestId } = render(<Cart {...mockProps} />);

    const { actions } = useCart();

    const ctaMinus = getAllByTestId(TESTS_IDS.CTA_MINUS)[0];

    act(() => {
      fireEvent.click(ctaMinus);
    });

    waitFor(() => {
      expect(actions.handleDecreaseQuantity).toHaveBeenCalled();
    });
  });

  it("should call handleRemoveProduct when clicking on the remove button", () => {
    const { getAllByTestId } = render(<Cart {...mockProps} />);

    const { actions } = useCart();

    const ctaButton = getAllByTestId(TESTS_IDS.CTA_BUTTON)[0];

    act(() => {
      fireEvent.click(ctaButton);
    });

    waitFor(() => {
      expect(actions.handleRemoveProduct).toHaveBeenCalled();
    });
  });

  it("should call handleBuyProducts when clicking on the buy button", () => {
    const { getByTestId } = render(<Cart {...mockProps} />);

    const { actions } = useCart();

    const buyButton = getByTestId(TESTS_IDS.BUY_BUTTON);

    act(() => {
      fireEvent.click(buyButton);
    });

    waitFor(() => {
      expect(actions.handleBuyProducts).toHaveBeenCalled();
    });
  });
});
