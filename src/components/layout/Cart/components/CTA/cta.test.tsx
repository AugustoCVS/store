import React from "react";

import { TESTS_IDS } from "./cta.constants";
import { Cta } from "./cta.component";
import { act, fireEvent, render, waitFor } from "@testing-library/react";

const mockProps = {
  img: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
  price: "10",
  quantity: 1,
  title: "mockTitle",
  decreaseQuantity: jest.fn(),
  increaseQuantity: jest.fn(),
  removeProduct: jest.fn(),
};

describe("Cta tests", () => {
  it("should render the CTA component", () => {
    const { getByTestId } = render(<Cta {...mockProps} />);

    waitFor(() => {
      const container = getByTestId(TESTS_IDS.CONTAINER);
      const title = getByTestId(TESTS_IDS.TITLE);
      const img = getByTestId(TESTS_IDS.IMG);
      const wrapper = getByTestId(TESTS_IDS.WRAPPER);
      const quantityContainer = getByTestId(TESTS_IDS.QUANTITY_CONTAINER);
      const minus = getByTestId(TESTS_IDS.MINUS);
      const plus = getByTestId(TESTS_IDS.PLUS);
      const price = getByTestId(TESTS_IDS.PRICE);
      const button = getByTestId(TESTS_IDS.BUTTON);

      expect(container).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(wrapper).toBeInTheDocument();
      expect(quantityContainer).toBeInTheDocument();
      expect(minus).toBeInTheDocument();
      expect(plus).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  it("should call decreaseQuantity when minus button is clicked", () => {
    const { getByTestId } = render(<Cta {...mockProps} />);

    const minus = getByTestId(TESTS_IDS.MINUS);

    act(() => {
      fireEvent.click(minus);
    });

    waitFor(() => {
      expect(mockProps.decreaseQuantity).toHaveBeenCalled();
    });
  });

  it("should call increaseQuantity when plus button is clicked", () => {
    const { getByTestId } = render(<Cta {...mockProps} />);

    const plus = getByTestId(TESTS_IDS.PLUS);

    act(() => {
      fireEvent.click(plus);
    });

    waitFor(() => {
      expect(mockProps.increaseQuantity).toHaveBeenCalled();
    });
  });

  it("should call removeProduct when button is clicked", () => {
    const { getByTestId } = render(<Cta {...mockProps} />);

    const button = getByTestId(TESTS_IDS.BUTTON);

    act(() => {
      fireEvent.click(button);
    });

    waitFor(() => {
      expect(mockProps.removeProduct).toHaveBeenCalled();
    });
  });
});
