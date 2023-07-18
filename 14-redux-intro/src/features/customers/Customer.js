import { useSelector } from "react-redux";

function Customer() {
  //! read data from the Redux store - store.js
  // const rootReducer = combineReducers({
  //   account: accountReducer,
  //!   customer: customerReducer,
  // });
  const customer = useSelector(store => store.customer.fullName);
  console.log('from customer component: ', customer);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
