type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav({ viewCart, setViewCart }: PropsType) {
  return (
    <nav>
      {viewCart ? (
        <button onClick={() => setViewCart(false)}>View Product</button>
      ) : (
        <button onClick={() => setViewCart(true)}>View Cart</button>
      )}
    </nav>
  );
}

export default Nav;
