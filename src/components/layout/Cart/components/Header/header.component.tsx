import React from "react";
import { X } from "lucide-react";

import * as S from "./header.styles";
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = ({ handleCloseTheCart }) => {
  return (
    <S.Container>
      <S.Title>
        Carrinho <br /> de compras
      </S.Title>
      <S.Button onClick={handleCloseTheCart}>
        <X color="white" width={25} height={25} />
      </S.Button>
    </S.Container>
  );
};
