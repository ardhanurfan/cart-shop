import { useState } from "react";
import useCart from "../hooks/useCart";
import CartLineItem from "./CartLineItem";

function Cart() {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, cart, totalItems, totalPrice } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  return (
    <>
      <div className="container py-32 min-h-screen flex flex-col items-center">
        {confirm ? (
          <p className="font-bold text-20 w-full col-span-5 text-center">
            Order Confirmed
          </p>
        ) : cart.length > 0 ? (
          <>
            <h1 className="font-bold text-3xl mb-6">Cart</h1>
            <ul>
              {cart.map((item) => {
                return (
                  <CartLineItem
                    key={item.id}
                    item={item}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                  />
                );
              })}
            </ul>
            <div className="flex justify-between w-full p-6 bg-slate-100 rounded-lg fixed bottom-0 container backdrop-blur-lg bg-opacity-75">
              <div>
                <p>Total Items: {totalItems}</p>
                <p>Total Items: {totalPrice}</p>
              </div>
              <button disabled={!totalItems} onClick={onSubmitOrder}>
                Submit Order
              </button>
            </div>
          </>
        ) : (
          <p className="font-bold text-slate-400 text-20 w-full col-span-5 text-center">
            Cart Empty
          </p>
        )}
      </div>
    </>
  );
}

export default Cart;
