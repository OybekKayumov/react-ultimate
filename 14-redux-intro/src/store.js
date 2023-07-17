import { createStore } from 'redux';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
}

// important to remember that reducers are not allowed to modify the existing state and they're also not allowed to do any asynchronous logic or other side effects.
function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
   
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
};

// Creating a Redux Store
const store = createStore(reducer);

store.dispatch({ type: 'account/deposit', payload: 500 });
// console.log('from redux: Hi!', store.getState());
store.dispatch({ type: 'account/withdraw', payload: 200 });
console.log('from redux: Hi!', store.getState());

store.dispatch({ 
  type: 'account/requestLoan', 
  payload: {  amount: 1000, purpose: "Buy a car" } 
});

console.log('from redux: Hi!', store.getState());
// from redux: Hi! {balance: 1300, loan: 1000, loanPurpose: 'Buy a car'}

store.dispatch({ type: 'account/payLoan' });
console.log('from redux: Hi!', store.getState());

