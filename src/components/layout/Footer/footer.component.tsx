"use client";

import React from "react";

import * as S from "./footer.styles";
import { TESTS_IDS } from "./footer.constants";

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer data-testid={TESTS_IDS.CONTAINER}>
      <S.FooterText data-testid={TESTS_IDS.TEXT}>
        AGT © Todos os direitos reservados
      </S.FooterText>
    </S.FooterContainer>
  );
};
