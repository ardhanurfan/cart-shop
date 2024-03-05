import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import Product from "./Product";

function ProductList() {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  return (
    <div className="container py-32 grid grid-cols-5 gap-10 min-h-screen">
      {products?.length ? (
        products.map((product) => {
          const inCart = cart.some((item) => item.id === product.id);

          return (
            <Product
              key={product.id}
              product={product}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
              inCart={inCart}
            />
          );
        })
      ) : (
        <p className="font-bold text-20 w-full col-span-5 text-center">
          Loading...
        </p>
      )}
    </div>
  );
}

export default ProductList;
