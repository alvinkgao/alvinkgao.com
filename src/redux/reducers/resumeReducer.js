import { CHANGE_RESUME, GET_RESUME } from "../actions/types";
import Resume_9_11_19 from "../../content/documents/Resume_9_11_19.pdf";
import Resume_8_2_19 from "../../content/documents/Resume_8_2_19.pdf";

const initialState = {
  items: [Resume_9_11_19, Resume_8_2_19],
  item: Resume_9_11_19
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RESUME:
      return {
        ...state
      };
    case CHANGE_RESUME:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
