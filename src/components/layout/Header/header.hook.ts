import { useState } from "react";

export const useHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleToggleCart = (): void => {
    setIsCartOpen(!isCartOpen);
  };

  return {
    states: {
      isCartOpen,
    },
    actions: {
      handleToggleCart,
    },
  };
};
