
import { UPDATE_TEXT } from "../constants/ActionTypes";

export default function reducer(state = { value : '', text_len : 0 }, action) {
 
 switch (action.type) {
    case UPDATE_TEXT: 
      return state = {
        value : action.payload,
        text_len : action.payload.length
    }
  }

  return state;
}