import { CtaProps } from "./cta.types";
import { Minus, Plus, X } from "lucide-react";

import * as S from "./cta.styles";

export const Cta: React.FC<CtaProps> = ({ img, price, quantity, title }) => {
  return (
    <S.Container>
      <img src={img} width={50} height={60} />

      <S.Text>{title}</S.Text>

      <S.QuantityContainer>
        <S.QuantityText>Qtd:</S.QuantityText>
        <S.QuantityBox>
          <Minus width={5} color="black" />
          <S.Divider />
          <S.QuantityText isQuantity>{quantity}</S.QuantityText>
          <S.Divider />
          <Plus width={5} color="black" />
        </S.QuantityBox>
      </S.QuantityContainer>

      <S.Text isPriceText>R${price}</S.Text>
      <S.ButtonContainer>
        <X width={8} height={17} color="white" />
      </S.ButtonContainer>
    </S.Container>
  );
};
