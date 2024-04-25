export type CtaProps = {
  img: string;
  title: string;
  quantity: number | undefined;
  price: string;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  removeProduct: () => void;
}