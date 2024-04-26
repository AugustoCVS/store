import { ProductProps } from "@/src/@types/product";
import { addProduct } from "@/src/redux/Slices/products.slice";
import { MessageUtils } from "@/src/utils/message";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SUCCESS_MESSAGE } from "./product-card.constants";

export const useProductCard = () => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(
    ({ product }: { product: ProductProps }): void => {
      dispatch(addProduct(product));
      MessageUtils.handleSendToast({
        message: SUCCESS_MESSAGE,
        type: "success",
      });
    },
    [dispatch]
  );

  return {
    actions: {
      handleAddToCart,
    },
  };
};
