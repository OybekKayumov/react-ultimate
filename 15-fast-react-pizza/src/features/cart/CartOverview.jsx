import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  // read state from redux store
  const totalCartQuantity = useSelector(state => state.cart.cart.reduce((sum, item) => sum + item.quantity,0));

  return (
    <div className="bg-stone-700 text-stone-200 uppercase px-4 py-4 sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
