import React from "react";

import { useProducts } from "./products.hook";
import { MockProducts } from "@/src/mocks/products";
import { render, waitFor } from "@testing-library/react";
import { Products } from "./products.component";
import { AllTheProviders } from "@/src/providers/TestsProviders";
import { TESTS_IDS } from "./products.constants";

jest.mock("./products.hook", () => ({
  useProducts: jest.fn(),
}));

const mockStates = {
  data: {
    products: MockProducts,
  },
  isLoading: false,
  error: null,
};

(useProducts as jest.Mock).mockImplementation(() => ({
  states: mockStates,
}));

describe("Products", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders>{children}</AllTheProviders>
  );

  it("should render the component with the products", () => {
    const { getByTestId, getAllByTestId } = render(<Products />, { wrapper });

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const productWrapper = getByTestId(TESTS_IDS.WRAPPER);
    const productCards = getAllByTestId(TESTS_IDS.PRODUCT_CARD);

    expect(container).toBeInTheDocument();
    expect(productWrapper).toBeInTheDocument();

    waitFor(() => {
      expect(productCards).toBeInTheDocument();
      expect(productCards).toHaveLength(MockProducts.length);
    });
  });

  it("should render the skeleton when loading", () => {
    waitFor(() => {
      mockStates.isLoading = true;
    });

    const { getByTestId, getAllByTestId } = render(<Products />, { wrapper });

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const productWrapper = getByTestId(TESTS_IDS.WRAPPER);

    expect(container).toBeInTheDocument();
    expect(productWrapper).toBeInTheDocument();

    waitFor(() => {
      const skeletons = getAllByTestId(TESTS_IDS.SKELETON);

      expect(skeletons).toBeInTheDocument();
      expect(skeletons).toHaveLength(8);
    });
  });

  it("should render the error component when there is an error", () => {
    waitFor(() => {
      mockStates.error = new Error("Error") as any;
    });

    const { getByTestId } = render(<Products />, { wrapper });

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const errorContainer = getByTestId(TESTS_IDS.ERROR_CONTAINER);

    expect(container).toBeInTheDocument();
    expect(errorContainer).toBeInTheDocument();
  });
});
