"use client";

import React from "react";

import * as S from "./header.styles";
import { Title } from "./components/Title/title.component";
import { CartButton } from "./components/CartButton/cart-button.component";
import { Cart } from "@/src/components/layout/Cart/cart.component";

export const Header: React.FC = () => {
  return (
    <>
      <S.Container>
        <Title />
        <CartButton />
      </S.Container>

      <Cart />
    </>
  );
};
