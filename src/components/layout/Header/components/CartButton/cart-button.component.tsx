import React from "react";
import { ShoppingCart } from "lucide-react";

import * as S from "./cart-button.styles";
import { CartButtonProps } from "./cart-button.types";
import { useCartButton } from "./cart-button.hook";
import { TESTS_IDS } from "./cart-button.constants";

export const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const { actions } = useCartButton();

  return (
    <S.Wrapper onClick={onClick} data-testid={TESTS_IDS.CONTAINER}>
      <ShoppingCart size={18} color="black" />
      <S.CartText data-testid={TESTS_IDS.CART_TEXT}>
        {actions.handleGetTotal()}
      </S.CartText>
    </S.Wrapper>
  );
};
