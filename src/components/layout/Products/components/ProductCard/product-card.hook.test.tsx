import React from "react";

import { AllTheProviders } from "@/src/providers/TestsProviders";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useProductCard } from "./product-card.hook";
import { MockProducts } from "@/src/mocks/products";

describe("useProductCard", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders>{children}</AllTheProviders>
  );

  it("should call handleAddToCart and add a product to the cart", () => {
    const { result } = renderHook(() => useProductCard(), { wrapper });

    act(() => {
      result.current.actions.handleAddToCart({
        product: MockProducts[0],
      });
    });
  });
});
