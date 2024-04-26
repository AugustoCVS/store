"use client";

import React from "react";

import * as S from "./header.styles";
import { Title } from "./components/Title/title.component";
import { CartButton } from "./components/CartButton/cart-button.component";
import { Cart } from "@/src/components/layout/Cart/cart.component";
import { useHeader } from "./header.hook";
import { AnimatePresence } from "framer-motion";
import { TESTS_IDS } from "./header.constants";

export const Header: React.FC = () => {
  const { states, actions } = useHeader();

  return (
    <>
      <S.Container data-testid={TESTS_IDS.CONTAINER}>
        <Title />
        <CartButton onClick={actions.handleToggleCart} />
      </S.Container>

      <AnimatePresence mode="wait">
        {states.isCartOpen && (
          <Cart handleCloseTheCart={actions.handleToggleCart} />
        )}
      </AnimatePresence>
    </>
  );
};
