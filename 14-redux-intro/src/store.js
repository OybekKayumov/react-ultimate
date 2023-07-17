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
        loan: action.payload
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
