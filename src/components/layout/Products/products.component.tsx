"use client";

import React from "react";

import * as S from "./products.styles";
import { useProducts } from "./products.hook";
import { ProductCard } from "./components/ProductCard/product-card.component";
import { SkeletonComponent } from "@/src/components/common/Skeleton/skeleton.component";
import { ErrorComponent } from "@/src/components/common/Error/error.component";

export const Products: React.FC = () => {
  const { states } = useProducts();

  if (states.error) {
    return (
      <S.Container>
        <ErrorComponent />
      </S.Container>
    );
  }

  if (states.isLoading) {
    return (
      <S.Container>
        <S.ProductWrapper>
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonComponent
              key={index}
              height={284}
              width={218}
              baseColor="#2C2C2C"
              borderRadius={8}
              highlightColor="#373737"
              testId="product-skeleton"
            />
          ))}
        </S.ProductWrapper>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.ProductWrapper>
        {states.data?.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </S.ProductWrapper>
    </S.Container>
  );
};
