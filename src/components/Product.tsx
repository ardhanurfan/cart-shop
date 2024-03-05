import { ReducerAction, ReducerActionType } from "../providers/CartProvider";
import { ProductType } from "../providers/ProductsProvider";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

function Product({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType) {
  const onAddToCart = () => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
  };

  return (
    <article className="bg-slate-100 rounded-xl p-3 flex flex-col gap-2 flex-grow">
      <div className="grow">
        <img
          className="w-full aspect-square object-cover object-top"
          src={product.image}
          alt={product.title}
        />
        <h3 className="font-bold text-14 line-clamp-2">{product.title}</h3>
        <div className="flex justify-between">
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
          <p>{inCart ? "✔️ In cart" : null}</p>
        </div>
      </div>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );
}

export default Product;
