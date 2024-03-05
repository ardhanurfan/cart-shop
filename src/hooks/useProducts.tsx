import { useContext } from "react";
import ProductContext, {
  UseProductContextType,
} from "../providers/ProductsProvider";

const useProducts = (): UseProductContextType => {
  return useContext(ProductContext);
};

export default useProducts;
