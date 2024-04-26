"use client";

import React from "react";

import * as S from "./cart.styles";

import { Header } from "./components/Header/header.component";
import { Cta } from "./components/CTA/cta.component";
import { Footer } from "./components/Footer/footer.component";
import { Button } from "./components/Button/button.component";
import { CartProps } from "./cart.types";

import { menuSlide, TESTS_IDS } from "./cart.constants";
import { Curve } from "./components/Curve/curve.component";
import { useCart } from "./cart.hook";

export const Cart: React.FC<CartProps> = ({ handleCloseTheCart }) => {
  const { states, actions } = useCart();

  return (
    <S.Container
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      data-testid={TESTS_IDS.CONTAINER}
    >
      <S.Content data-testid={TESTS_IDS.CONTENT}>
        <S.Wrapper>
          <Header handleCloseTheCart={handleCloseTheCart} />

          <S.CtaWrapper data-testid={TESTS_IDS.CTA_WRAPPER}>
            {states.products.map((product) => {
              return (
                <Cta
                  key={product.id}
                  img={product.photo}
                  title={product.name}
                  price={product.price}
                  quantity={product.quantity}
                  increaseQuantity={() =>
                    actions.handleIncreaseQuantity(product.id)
                  }
                  decreaseQuantity={() =>
                    actions.handleDecreaseQuantity(product.id)
                  }
                  removeProduct={() => actions.handleRemoveProduct(product.id)}
                />
              );
            })}
          </S.CtaWrapper>
        </S.Wrapper>

        <Footer text={actions.handleGetTotal()} />
      </S.Content>
      <Button
        onClick={actions.handleBuyProducts}
        disabled={!states.products.length}
      />
      <Curve />
    </S.Container>
  );
};
