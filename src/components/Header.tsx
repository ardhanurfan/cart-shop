import useCart from "../hooks/useCart";
import Nav from "./Nav";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ viewCart, setViewCart }: PropsType) {
  const { totalItems, totalPrice } = useCart();

  return (
    <header className="px-32 flex justify-between bg-slate-100 py-4 items-center fixed backdrop-blur-lg w-full top-0 bg-opacity-75 z-50">
      <h1 className="font-bold text-2xl">Ardhan.Co</h1>
      <div className="flex items-center gap-8">
        <Nav viewCart={viewCart} setViewCart={setViewCart}></Nav>
        <div>
          <p>Total Items: {totalItems}</p>
          <p>Total Items: {totalPrice}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
