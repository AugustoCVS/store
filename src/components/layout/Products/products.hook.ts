import { ProductRequest } from "@/src/services/interfaces/Product/product.type";
import { ProductService } from "@/src/services/products";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ERROR_MESSAGE } from "./products.constants";
import { MessageUtils } from "@/src/utils/message";

export const useProducts = () => {
  const [reqParams, setReqParams] = useState<ProductRequest>({
    page: 1,
    rows: 10,
    sortBy: "name",
    orderBy: "DESC",
  });

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      ProductService.getProducts({
        data: reqParams,
      }).catch((err: Error) => {
        console.error(err);
        MessageUtils.handleSendToast({ message: ERROR_MESSAGE, type: "error" });
      }),
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    states: {
      data,
      isLoading,
    },
  };
};
