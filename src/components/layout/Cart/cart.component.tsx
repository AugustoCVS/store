"use client";

import React from "react";

import * as S from "./cart.styles";

import { Header } from "./components/Header/header.component";
import { Cta } from "./components/CTA/cta.component";
import { Footer } from "./components/Footer/footer.component";
import { Button } from "./components/Button/button.component";
import { CartProps } from "./cart.types";

import { menuSlide } from "./cart.constants";
import { Curve } from "./components/Curve/curve.component";

export const Cart: React.FC<CartProps> = ({ handleCloseTheCart }) => {
  return (
    <S.Container
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <S.Content>
        <S.Wrapper>
          <Header handleCloseTheCart={handleCloseTheCart} />

          <Cta
            img="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp"
            title="Headset Cloud Revolver"
            price="1000.00"
            quantity={1}
          />
        </S.Wrapper>

        <Footer text="1000.00" />
      </S.Content>
      <Button onClick={() => console.log("clicou")} />
      <Curve />
    </S.Container>
  );
};
