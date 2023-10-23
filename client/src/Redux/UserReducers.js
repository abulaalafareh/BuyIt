import { ActionTypes } from "./ActionTypes";

const initialState = {
  user: {
    id: null,
    username: null,
    email: null,
    street: null,
    city: null,
    postal: null,
  },
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
