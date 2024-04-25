export type CtaProps = {
  id: string;
  img: string;
  title: string;
  quantity: number | undefined;
  price: string;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  removeProduct: () => void;
}