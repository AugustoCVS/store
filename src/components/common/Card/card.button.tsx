import React from "react";
import { ShoppingBag } from "lucide-react";
import { ButtonText, ButtonWrapper } from "./card.styles";
import { ButtonProps } from "./card.types";

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <ShoppingBag size={12} color="white" />
      <ButtonText>comprar</ButtonText>
    </ButtonWrapper>
  );
};
