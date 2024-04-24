"use client";

import React from "react";

import * as S from "./header.styles";
import { Title } from "./components/Title/title.component";
import { Cart } from "./components/Cart/cart.component";

export const Header: React.FC = () => {
  return (
    <S.Container>
      <Title />
      <Cart />
    </S.Container>
  );
};
