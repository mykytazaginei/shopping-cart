import NavBar from "./components/NavBar";
import CartContainer from "./components/cartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateeTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateeTotals());
  }, [cartItems]);

   return (
    <main>
      <Modal/>
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
