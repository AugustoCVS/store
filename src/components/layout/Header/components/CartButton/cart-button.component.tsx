import React from "react";
import { ShoppingCart } from "lucide-react";

import * as S from "./cart-button.styles";
import { CartButtonProps } from "./cart-button.types";

export const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  return (
    <S.Wrapper onClick={onClick}>
      <ShoppingCart size={18} color="black" />
      <S.CartText>0</S.CartText>
    </S.Wrapper>
  );
};
