import React from "react";
import { FooterProps } from "./footer.types";
import { TESTS_IDS } from "./footer.constants";

import * as S from "./footer.styles";

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <S.Container data-testid={TESTS_IDS.CONTAINER}>
      <S.Text data-testid={TESTS_IDS.TEXT}>Total:</S.Text>
      <S.Text data-testid={TESTS_IDS.TOTAL}>R${text}</S.Text>
    </S.Container>
  );
};
