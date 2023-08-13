import NavBar from "./components/NavBar";
import CartContainer from "./components/cartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateeTotals, getCartItmes } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateeTotals());
  }, [cartItems]);

  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(getCartItmes());
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
