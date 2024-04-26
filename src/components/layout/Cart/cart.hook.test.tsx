import React from "react";
import { act, renderHook, waitFor } from "@testing-library/react";

import { useCart } from "./cart.hook";
import { AllTheProviders } from "@/src/providers/TestsProviders";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Cart Hook", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders>{children}</AllTheProviders>
  );

  it("should call the increaseProductQuantity function", () => {
    const { result } = renderHook(() => useCart(), {
      wrapper,
    });

    act(() => {
      result.current.actions.handleIncreaseQuantity("8");
    });

    waitFor(() => {
      expect(result.current.states.products[8]?.quantity).toBe(2);
    });
  });

  it("should call the decreaseProductQuantity function", () => {
    const { result } = renderHook(() => useCart(), {
      wrapper,
    });

    act(() => {
      result.current.actions.handleDecreaseQuantity("8");
    });

    waitFor(() => {
      expect(result.current.states.products[8]?.quantity).toBe(1);
    });
  });

  it("should call the handleGetTotal function", () => {
    const { result } = renderHook(() => useCart(), {
      wrapper,
    });

    act(() => {
      result.current.actions.handleGetTotal();
    });

    expect(result.current.actions.handleGetTotal()).toBe(1600);
  });

  it("should call the removeProduct function", () => {
    const { result } = renderHook(() => useCart(), {
      wrapper,
    });

    act(() => {
      result.current.actions.handleRemoveProduct("8");
    });

    act(() => {
      result.current.actions.handleRemoveProduct("7");
    });

    waitFor(() => {
      expect(result.current.states.products).toEqual([]);
    });
  });

  it("should call the handleBuyProducts function", () => {
    const { result } = renderHook(() => useCart(), {
      wrapper,
    });

    act(() => {
      result.current.actions.handleBuyProducts();
    });

    waitFor(() => {
      expect(result.current.states.products).toEqual([]);
    });
  });
});
