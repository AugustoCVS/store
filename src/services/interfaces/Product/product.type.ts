export type ProductProps = {
  id: string,
  name: string,
  brand: string,
  description: string,
  photo: string,
  price: string,
  createdAt: string,
  updatedAt: string,
}

export type ProductResponse = {
  products: ProductProps[];
}

export type OrderByProps = 'ASC' | 'DESC';

export type ProductRequest = {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: OrderByProps;
}