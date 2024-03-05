import { ReactElement, createContext, useEffect, useState } from "react";

export type ProductType = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const initState: ProductType[] = [];

export type UseProductContextType = { products: ProductType[] | undefined };

const initContextState: UseProductContextType = {
  products: [],
};

const ProductContext = createContext<UseProductContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [product, setProduct] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .catch((err) => {
          if (err instanceof Error) {
            console.log(err.message);
          }
        });
      return data;
    };

    fetchProducts().then((data) => setProduct(data));
  }, []);

  return (
    <ProductContext.Provider value={{ products: product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
