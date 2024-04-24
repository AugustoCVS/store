import React from "react";
import { Card } from "@/src/components/common/Card";
import { ProductCardProps } from "./product-card.types";

export const ProductCard: React.FC<ProductCardProps> = ({
  description,
  id,
  name,
  photo,
  price,
}) => {
  return (
    <Card.Root id={id}>
      <Card.ContentContainer>
        <Card.Image url={photo} width={100} height={100} />
        <Card.TitleContainer>
          <Card.Title text={name} />
          <Card.Tag text={price} />
        </Card.TitleContainer>
        <Card.Subtitle text={description} />
      </Card.ContentContainer>
      <Card.Button onClick={() => console.log("click")} />
    </Card.Root>
  );
};
