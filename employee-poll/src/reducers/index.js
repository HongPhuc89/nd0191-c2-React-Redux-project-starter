import { combineReducers } from "@reduxjs/toolkit";
import authenticatedUser from "./authenticatedUser";
import questions from "./questions";
import users from "./users";

export default combineReducers({
  authenticatedUser,
  users,
  questions,
});
