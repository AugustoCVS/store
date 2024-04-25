import React from "react";
import { ShoppingCart } from "lucide-react";

import * as S from "./cart-button.styles";

export const CartButton: React.FC = () => {
  return (
    <S.Wrapper>
      <ShoppingCart size={18} color="black" />
      <S.CartText>0</S.CartText>
    </S.Wrapper>
  );
};
