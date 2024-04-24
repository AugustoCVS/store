import { ProductRequest } from "@/src/services/interfaces/Product/product.type";
import { ProductService } from "@/src/services/products";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useProducts = () => {
  const [reqParams, setReqParams] = useState<ProductRequest>({
    page: 1,
    rows: 10,
    sortBy: "name",
    orderBy: "DESC",
  });
  
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => ProductService.getProducts({
      data: reqParams,
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
