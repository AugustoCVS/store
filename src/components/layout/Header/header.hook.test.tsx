import { AllTheProviders } from "@/src/providers/TestsProviders";
import { act, renderHook } from "@testing-library/react";
import React from "react";
import { useHeader } from "./header.hook";

describe("useHeader", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders>{children}</AllTheProviders>
  );

  it("should call handleToggleCart and change the isCartOpen state", () => {
    const { result } = renderHook(() => useHeader(), { wrapper });

    act(() => {
      result.current.actions.handleToggleCart();
    });

    expect(result.current.states.isCartOpen).toBe(true);
  });
});
