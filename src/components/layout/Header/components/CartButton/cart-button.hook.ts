import { ProductProps } from "@/src/@types/product";
import { useSelector } from "react-redux";

export const useCartButton = () => {
  const products = useSelector(
    (state: { products: ProductProps[] }) => state.products
  );

  const handleGetTotal = (): number => {
    return products.reduce((acc, product) => {
      return acc + (product.quantity ?? 0);
    }, 0);
  };

  return {
    actions: {
      handleGetTotal,
    }
  };
};
