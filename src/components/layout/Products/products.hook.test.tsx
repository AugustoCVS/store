import { AllTheProviders } from "@/src/providers/TestsProviders";
import { renderHook, waitFor } from "@testing-library/react";
import React from "react";
import { useProducts } from "./products.hook";
import { ProductService } from "@/src/services/products";
import { MockProducts } from "@/src/mocks/products";

jest.mock("../../../services/products", () => ({
  ProductService: {
    getProducts: jest.fn(),
  },
}));

describe("useProducts", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders>{children}</AllTheProviders>
  );

  it("should return the data with te products", () => {
    const { result } = renderHook(() => useProducts(), { wrapper });

    (ProductService.getProducts as jest.Mock).mockResolvedValue(MockProducts);

    waitFor(() => {
      expect(result.current.states.data).toEqual(MockProducts);
    });
  });

  it("should return the error", () => {
    const { result } = renderHook(() => useProducts(), { wrapper });

    (ProductService.getProducts as jest.Mock).mockRejectedValue(
      new Error("Error")
    );

    waitFor(() => {
      expect(result.current.states.error).toEqual(new Error("Error"));
    });
  });
});
