import { ProductProps } from "@/src/@types/product";

export type ProductResponse = {
  products: ProductProps[];
};

export type OrderByProps = "ASC" | "DESC";

export type ProductRequest = {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: OrderByProps;
};
