const PASSWORD = "UpdatePassword/password";

export const setPassword = (value) => ({
  type: PASSWORD,
  payload: value,
});

const INITIAL_STATE = "";

export default function setPasswordReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PASSWORD:
      return action.payload;
    default:
      return state;
  }
}
