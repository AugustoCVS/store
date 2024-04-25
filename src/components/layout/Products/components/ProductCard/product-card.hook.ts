import { ProductProps } from "@/src/@types/product";
import { addProduct } from "@/src/redux/Slices/products.slice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useProductCard = () => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(
    ({ product }: { product: ProductProps }): void => {
      dispatch(addProduct(product));
    },
    [dispatch]
  );

  return {
    actions: {
      handleAddToCart,
    },
  };
};
