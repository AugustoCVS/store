import React from "react";
import { X } from "lucide-react";

import * as S from "./header.styles";
import { HeaderProps } from "./header.types";
import { TESTS_IDS } from "./header.constants";

export const Header: React.FC<HeaderProps> = ({ handleCloseTheCart }) => {
  return (
    <S.Container data-testid={TESTS_IDS.CONTAINER}>
      <S.Title data-testid={TESTS_IDS.TITLE}>
        Carrinho <br /> de compras
      </S.Title>
      <S.Button onClick={handleCloseTheCart} data-testid={TESTS_IDS.BUTTON}>
        <X color="white" width={25} height={25} />
      </S.Button>
    </S.Container>
  );
};
