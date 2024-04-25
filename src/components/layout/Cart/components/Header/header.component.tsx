import React from "react";
import { X } from "lucide-react";

import * as S from "./header.styles";

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Title>
        Carrinho <br /> de compras
      </S.Title>
      <S.Button>
        <X color="white" width={25} height={25} />
      </S.Button>
    </S.Container>
  );
};
