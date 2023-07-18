import { useSelector } from "react-redux";

function Customer() {
  //! read data from the Redux store - store.js
  // const rootReducer = combineReducers({
  //   account: accountReducer,
  //!   customer: customerReducer,
  // });
  const customer = useSelector(store => store.customer);
  console.log('from customer component: ', customer);

  return <h2>👋 Welcome, %NAME%</h2>;
}

export default Customer;
