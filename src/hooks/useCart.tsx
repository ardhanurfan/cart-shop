import { useContext } from "react";
import CartContext, { UseCartContextType } from "../providers/CartProvider";

const useCart = (): UseCartContextType => {
  return useContext(CartContext);
};

export default useCart;
