import { ToastProps } from "@/src/@types/toast";
import { ProductRequest } from "@/src/services/interfaces/Product/product.type";
import { ProductService } from "@/src/services/products";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { ERROR_MESSAGE } from "./products.constants";

export const useProducts = () => {
  const [reqParams, setReqParams] = useState<ProductRequest>({
    page: 1,
    rows: 10,
    sortBy: "name",
    orderBy: "DESC",
  });

  const handleSendToast = ({message, type}: ToastProps) => {
    return type === "error" ? toast.error(message) : toast.success(message);
  }
  
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => ProductService.getProducts({
      data: reqParams,
    }).catch((err: Error) => {
      console.error(err);
      handleSendToast({ message: ERROR_MESSAGE, type: "error" });
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
