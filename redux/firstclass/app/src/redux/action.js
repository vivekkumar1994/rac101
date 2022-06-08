import {Add_counter,Reduce_counter} from "./actionTypes"

const addcounter = (payload) => {
  return {
    type : Add_counter,
    payload
  }

}
const reducecounter = (payload)  => {
  return {
    type: Reduce_counter,
    payload
  }
}
export {addcounter,reducecounter}