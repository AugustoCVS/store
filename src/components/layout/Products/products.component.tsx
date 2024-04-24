"use client";

import React from "react";

import * as S from "./products.styles";
import { useProducts } from "./products.hook";
import { ProductCard } from "./components/ProductCard/product-card.component";

export const Products: React.FC = () => {
  const { states } = useProducts();

  return (
    <S.Container>
      <S.ProductWrapper>
        {states.data?.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              photo={product.photo}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </S.ProductWrapper>
    </S.Container>
  );
};
