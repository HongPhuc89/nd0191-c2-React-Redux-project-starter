import {LOGOUT_USER, SET_AUTHENTICATED_USER} from "../actions/authenticateUser";

export default function authenticatedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHENTICATED_USER:
      return action.authenticatedUser;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}
