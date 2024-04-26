import React from "react";

import { ButtonProps } from "./button.types";
import * as S from "./button.styles";

import { TESTS_IDS } from "./button.constants";

export const Button: React.FC<ButtonProps> = ({ onClick, disabled }) => {
  return (
    <S.ButtonContainer
      onClick={onClick}
      disabled={disabled}
      data-testid={TESTS_IDS.BUTTON_CONTAINER}
    >
      <S.Text data-testid={TESTS_IDS.BUTTON_TEXT}>Finalizar Compra</S.Text>
    </S.ButtonContainer>
  );
};
