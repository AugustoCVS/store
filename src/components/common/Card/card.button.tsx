import React from "react";
import { ShoppingBag } from "lucide-react";
import { ButtonText, ButtonWrapper } from "./card.styles";
import { ButtonProps } from "./card.types";

import { TESTS_IDS } from "./card.constans";

export const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <ButtonWrapper onClick={onClick} data-testid={TESTS_IDS.BUTTON_WRAPPER}>
      <ShoppingBag size={12} color="white" data-testid={TESTS_IDS.ICON} />
      <ButtonText data-testid={TESTS_IDS.ICON}>{text}</ButtonText>
    </ButtonWrapper>
  );
};
