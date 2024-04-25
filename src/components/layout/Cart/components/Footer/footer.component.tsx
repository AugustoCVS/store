import React from "react";
import { FooterProps } from "./footer.types";

import * as S from "./footer.styles";

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <S.Container>
      <S.Text>Total:</S.Text>
      <S.Text>R${text}</S.Text>
    </S.Container>
  );
};
