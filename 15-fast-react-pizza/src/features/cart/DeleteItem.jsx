import Button from "../../ui/Button";
import {useDispatch} from "react-redux";
import {deleteItem} from "./cartSlice";


const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button 
      type="small" 
      onClick={() => dispatchEvent(deleteItem(pizzaId))}
    >
      Delete
    </Button>
  )
}

export default DeleteItem