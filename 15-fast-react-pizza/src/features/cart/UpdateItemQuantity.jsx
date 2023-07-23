/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button 
        type="round" 
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>

    <span className="text-sm font-medium ">{currentQuantity}</span>

      <Button 
        type="round" 
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  )
}

export default UpdateItemQuantity