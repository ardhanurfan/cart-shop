import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../providers/CartProvider";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

function CartLineItem({ item, dispatch, REDUCER_ACTIONS }: PropsType) {
  const lineTotal: number = item.qty * item.price;

  const highestQty: number = 20 > item.qty ? 20 : item.qty;

  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );

  const onDelete = () => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });
  };

  const onChangeQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  return (
    <>
      <div
        className="flex gap-6 p-2 rounded-lg bg-slate-100 w-[600px] mb-3 relative"
        key={item.id}
      >
        <div
          onClick={onDelete}
          className="absolute top-2 right-2 text-xl cursor-pointer"
        >
          ❌
        </div>
        <img
          className="rounded-xl object-cover object-top h-[150px] aspect-square"
          src={item.image}
          alt={item.title}
        />
        <div className="flex items-center w-full">
          <div className="text-start grow">
            <p className="font-bold line-clamp-1">{item.title}</p>
            <p className="text-yellow-500">{`$${item.price}`}</p>
          </div>
          <div className="flex gap-6 items-center">
            <select
              value={item.qty}
              onChange={onChangeQty}
              aria-label="Item Quantity"
              name="qty"
              id=""
              className="w-14 p-1 border border-slate-300 rounded-lg"
            >
              {optionValues.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <h2 className="text-2xl font-bold">{`$${lineTotal.toFixed(2)}`}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartLineItem;
