import React from "react";

import { ButtonProps } from "./button.types";
import * as S from "./button.styles";

export const Button: React.FC<ButtonProps> = ({ onClick, disabled }) => {
  return (
    <S.ButtonContainer onClick={onClick} disabled={disabled}>
      <S.Text>Finalizar Compra</S.Text>
    </S.ButtonContainer>
  );
};
