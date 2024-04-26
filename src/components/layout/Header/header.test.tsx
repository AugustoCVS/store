import React from "react";

import { useHeader } from "./header.hook";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { Header } from "./header.component";
import { TESTS_IDS } from "./header.constants";
import { AllTheProviders } from "@/src/providers/TestsProviders";

jest.mock("./header.hook", () => ({
  useHeader: jest.fn(),
}));

const mockActions = {
  handleToggleCart: jest.fn(),
};

const mockStates = {
  isCartOpen: false,
};

(useHeader as jest.Mock).mockImplementation(() => ({
  states: mockStates,
  actions: mockActions,
}));

describe("Header Component", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders>{children}</AllTheProviders>
  );

  it("should render the Header component", () => {
    const { getByTestId } = render(<Header />, { wrapper });

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const title = getByTestId(TESTS_IDS.TITLE);
    const cartButton = getByTestId(TESTS_IDS.CART_BUTTON);

    expect(container).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
  });

  it("should call handleToggleCart when the cart button is clicked and show the cart", () => {
    const { getByTestId } = render(<Header />, { wrapper });

    const { actions } = useHeader();

    const cartButton = getByTestId(TESTS_IDS.CART_BUTTON);

    act(() => {
      fireEvent.click(cartButton);
    });

    expect(actions.handleToggleCart).toHaveBeenCalledTimes(1);

    waitFor(() => {
      const cartContainer = getByTestId(TESTS_IDS.CART_CONTAINER);
      const closeButton = getByTestId(TESTS_IDS.HEADER_CART_BUTTON);

      expect(cartContainer).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
    });
  });

  it("should call handleToggleCart when the close button is clicked and hide the cart", () => {
    const { getByTestId } = render(<Header />, { wrapper });

    const { actions } = useHeader();

    const cartButton = getByTestId(TESTS_IDS.CART_BUTTON);

    act(() => {
      fireEvent.click(cartButton);
    });

    waitFor(() => {
      const closeButton = getByTestId(TESTS_IDS.HEADER_CART_BUTTON);

      act(() => {
        fireEvent.click(closeButton);
      });
    });

    expect(actions.handleToggleCart).toHaveBeenCalledTimes(2);

    waitFor(() => {
      const cartContainer = getByTestId(TESTS_IDS.CART_CONTAINER);

      expect(cartContainer).not.toBeInTheDocument();
    });
  });
});
