import { api } from "./api";

import {
  ProductRequest,
  ProductResponse,
} from "./interfaces/Product/product.type";

export const ProductService = {
  getProducts: async ({ data }: { data: ProductRequest }) => {
    const res = await api.get<ProductResponse>("/products", {
      params: {
        page: data.page,
        rows: data.rows,
        sortBy: data.sortBy,
        orderBy: data.orderBy,
      }
    })

    return res.data
  }
   
};
