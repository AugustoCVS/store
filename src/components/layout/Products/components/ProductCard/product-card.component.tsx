import React from "react";
import { Card } from "@/src/components/common/Card";
import { useProductCard } from "./product-card.hook";
import { ProductProps } from "@/src/@types/product";

export const ProductCard: React.FC<{ product: ProductProps }> = ({
  product,
}) => {
  const { actions } = useProductCard();

  return (
    <Card.Root id={product.id}>
      <Card.ContentContainer>
        <Card.Image url={product.photo} width={100} height={100} />
        <Card.TitleContainer>
          <Card.Title text={product.name} />
          <Card.Tag text={product.price} />
        </Card.TitleContainer>
        <Card.Subtitle text={product.description} />
      </Card.ContentContainer>
      <Card.Button
        onClick={() => actions.handleAddToCart({ product: product })}
      />
    </Card.Root>
  );
};
