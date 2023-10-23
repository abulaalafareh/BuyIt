import { ActionTypes } from "./ActionTypes";

export const setUser = (user) => {
  console.log("here", user);
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};
