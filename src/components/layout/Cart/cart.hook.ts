import { ProductProps } from "@/src/@types/product";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeAllProducts,
  removeProduct,
} from "@/src/redux/Slices/products.slice";
import { MessageUtils } from "@/src/utils/message";
import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
  const products = useSelector(
    (state: { products: ProductProps[] }) => state.products
  );
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id: string): void => {
    dispatch(increaseProductQuantity(id));
  };

  const handleDecreaseQuantity = (id: string): void => {
    dispatch(decreaseProductQuantity(id));
  };

  const handleGetTotal = (): number => {
    return products.reduce((acc, product) => {
      return acc + Number(product.price) * (product.quantity ?? 0);
    }, 0);
  };

  const handleRemoveProduct = (id: string): void => {
    dispatch(removeProduct(id));
  };

  const handleBuyProducts = (): void => {
    dispatch(removeAllProducts());
    MessageUtils.handleSendToast({
      message: "Compra realizada com sucesso!",
      type: "success",
    });
  }

  return {
    states: {
      products,
    },
    actions: {
      handleIncreaseQuantity,
      handleDecreaseQuantity,
      handleGetTotal,
      handleRemoveProduct,
      handleBuyProducts
    },
  };
};
