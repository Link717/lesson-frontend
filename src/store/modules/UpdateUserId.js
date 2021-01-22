const USER_ID = "UpdateUserId/UserId";

export const setUserId = (value) => ({
  type: USER_ID,
  payload: value,
});

const INITIAL_STATE = "";

export default function setUserIdReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_ID:
      return action.payload;
    default:
      return state;
  }
}
