
import { UPDATE_TEXT } from "../constants/ActionTypes";

export function updateText(payload) {
  return {
    type: UPDATE_TEXT,
    payload
  };
}

