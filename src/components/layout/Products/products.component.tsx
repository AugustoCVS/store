"use client";

import React from "react";

import * as S from "./products.styles";
import { useProducts } from "./products.hook";
import { ProductCard } from "./components/ProductCard/product-card.component";
import { SkeletonComponent } from "@/src/components/common/Skeleton/skeleton.component";
import { ErrorComponent } from "@/src/components/common/Error/error.component";
import { TESTS_IDS } from "./products.constants";

export const Products: React.FC = () => {
  const { states } = useProducts();

  if (states.error) {
    return (
      <S.Container data-testid={TESTS_IDS.CONTAINER}>
        <ErrorComponent />
      </S.Container>
    );
  }

  if (states.isLoading) {
    return (
      <S.Container data-testid={TESTS_IDS.CONTAINER}>
        <S.ProductWrapper data-testid={TESTS_IDS.WRAPPER}>
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonComponent
              key={index}
              height={284}
              width={218}
              baseColor="#EEEEEE"
              borderRadius={8}
              highlightColor="#BFBFBF"
            />
          ))}
        </S.ProductWrapper>
      </S.Container>
    );
  }

  return (
    <S.Container data-testid={TESTS_IDS.CONTAINER}>
      <S.ProductWrapper data-testid={TESTS_IDS.WRAPPER}>
        {states.data?.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </S.ProductWrapper>
    </S.Container>
  );
};
