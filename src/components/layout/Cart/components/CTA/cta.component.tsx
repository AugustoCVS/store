import { CtaProps } from "./cta.types";
import { Minus, Plus, X } from "lucide-react";

import * as S from "./cta.styles";

import { TESTS_IDS } from "./cta.constants";

export const Cta: React.FC<CtaProps> = ({
  img,
  price,
  quantity,
  title,
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
}) => {
  return (
    <S.Container data-testid={TESTS_IDS.CONTAINER}>
      <img src={img} width={50} height={60} data-testid={TESTS_IDS.IMG} />

      <S.Text data-testid={TESTS_IDS.TITLE}>{title}</S.Text>

      <S.Wrapper data-testid={TESTS_IDS.WRAPPER}>
        <S.QuantityContainer data-testid={TESTS_IDS.QUANTITY_CONTAINER}>
          <S.QuantityText>Qtd:</S.QuantityText>
          <S.QuantityBox>
            <Minus
              width={5}
              color="black"
              onClick={decreaseQuantity}
              data-testid={TESTS_IDS.MINUS}
              style={{
                cursor: "pointer",
              }}
            />
            <S.Divider />
            <S.QuantityText isQuantity>{quantity}</S.QuantityText>
            <S.Divider />
            <Plus
              width={5}
              color="black"
              onClick={increaseQuantity}
              data-testid={TESTS_IDS.PLUS}
              style={{
                cursor: "pointer",
              }}
            />
          </S.QuantityBox>
        </S.QuantityContainer>
      </S.Wrapper>

      <S.Text isPriceText data-testid={TESTS_IDS.PRICE}>
        R${price}
      </S.Text>
      <S.ButtonContainer onClick={removeProduct} data-testid={TESTS_IDS.BUTTON}>
        <X width={8} height={17} color="white" />
      </S.ButtonContainer>
    </S.Container>
  );
};
