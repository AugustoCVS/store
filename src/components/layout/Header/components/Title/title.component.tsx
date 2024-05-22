import React from "react";

import * as S from "./title.styles";
import { TESTS_IDS } from "./title.constants";

export const Title: React.FC = () => {
  return (
    <S.Wrapper data-testid={TESTS_IDS.CONTAINER}>
      <S.Title data-testid={TESTS_IDS.TITLE}>AGT</S.Title>
      <S.Subtitle data-testid={TESTS_IDS.SUBTITLE}>Vendas</S.Subtitle>
    </S.Wrapper>
  );
};
