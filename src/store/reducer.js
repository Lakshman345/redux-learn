const initialState = {
  counter: 0,
  name: "Lakshman"
};
const reducer = (state = initialState, action) => {
  // console.log("inside reducer");
  if (action.type === "ASYNC_INC_COUNTER") {
    return { ...state, counter: state.counter + 1 }; //update state
  }
  if (action.type === "DEC_COUNTER") {
    return { ...state, counter: state.counter - 1 }; //update state
  }
  if (action.type === "ADD_COUNTER") {
    return { ...state, counter: state.counter + action.value }; //update state
  }
  if (action.type === "SUB_COUNTER") {
    return { ...state, counter: state.counter - action.value }; //update state
  }
  return state;
};
export default reducer;
