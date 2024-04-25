import React from "react";
import { ShoppingCart } from "lucide-react";

import * as S from "./cart-button.styles";
import { CartButtonProps } from "./cart-button.types";
import { useCartButton } from "./cart-button.hook";

export const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const { actions } = useCartButton();

  return (
    <S.Wrapper onClick={onClick}>
      <ShoppingCart size={18} color="black" />
      <S.CartText>{actions.handleGetTotal()}</S.CartText>
    </S.Wrapper>
  );
};
