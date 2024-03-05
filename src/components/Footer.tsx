import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
};

function Footer({ viewCart }: PropsType) {
  const { totalItems, totalPrice } = useCart();

  return (
    <>
      {!viewCart && (
        <footer className="px-32 flex justify-between bg-slate-100 py-4 items-center text-2xl font-bold">
          <p>Total Items: {totalItems}</p>
          <p>Total Items: {totalPrice}</p>
          <p>Shopping Cart &copy; {new Date().getFullYear()}</p>
        </footer>
      )}
    </>
  );
}

export default Footer;
