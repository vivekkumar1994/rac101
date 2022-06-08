import { Add_counter, Reduce_counter } from "./actionTypes"



const initState = {
  counter: 1
};
const reducer = (state = initState ,{type,payload}) => {
switch (type) {
  case Add_counter:
    return {
      ...state,
      counter:state.counter + payload
    };
    case Reduce_counter:
    return {
      ...state,
      counter:state.counter - payload
    };
default:
  return state
}
}



export {reducer}

