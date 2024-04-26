import React from "react";

import { useProductCard } from "./product-card.hook";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { AllTheProviders } from "@/src/providers/TestsProviders";
import { TESTS_IDS } from "./product-card.constants";
import { ProductCard } from "./product-card.component";
import { MockProducts } from "@/src/mocks/products";

jest.mock("./product-card.hook", () => ({
  useProductCard: jest.fn(),
}));

const mockActions = {
  handleAddToCart: jest.fn(),
};

(useProductCard as jest.Mock).mockImplementation(() => ({
  actions: mockActions,
}));

const mockProps = MockProducts[0];

describe("ProductCard", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders>{children}</AllTheProviders>
  );

  it("should render the ProductCard component", () => {
    const { getByTestId } = render(<ProductCard product={mockProps} />, {
      wrapper,
    });

    const root = getByTestId(TESTS_IDS.ROOT);
    const container = getByTestId(TESTS_IDS.CONTENT_CONTAINER);
    const titleContainer = getByTestId(TESTS_IDS.TITLE_WRAPPER);
    const title = getByTestId(TESTS_IDS.TITLE);
    const tag = getByTestId(TESTS_IDS.TAG);
    const subtitle = getByTestId(TESTS_IDS.SUBTITLE);
    const button = getByTestId(TESTS_IDS.BUTTON_WRAPPER);

    expect(root).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(titleContainer).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    waitFor(() => {
      const img = getByTestId(TESTS_IDS.IMAGE);
      expect(img).toBeInTheDocument();
    });
  });

  it("should call handleAddToCart when the cart button is clicked and show the cart", () => {
    const { getByTestId } = render(<ProductCard product={mockProps} />, {
      wrapper,
    });

    const { actions } = useProductCard();

    const cartButton = getByTestId(TESTS_IDS.BUTTON_WRAPPER);

    act(() => {
      fireEvent.click(cartButton);
    });

    expect(actions.handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
