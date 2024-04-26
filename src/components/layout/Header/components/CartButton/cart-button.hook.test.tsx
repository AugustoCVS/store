import React from "react";

import { useCartButton } from "./cart-button.hook";
import { AllTheProviders } from "@/src/providers/TestsProviders";
import { act, renderHook } from "@testing-library/react";

describe("useCartButton", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders>{children}</AllTheProviders>
  );

  it("should return the total of products in the cart", () => {
    const { result } = renderHook(() => useCartButton(), { wrapper });

    act(() => {
      result.current.actions.handleGetTotal();
    });

    expect(result.current.actions.handleGetTotal()).toBe(2);
  });
});
