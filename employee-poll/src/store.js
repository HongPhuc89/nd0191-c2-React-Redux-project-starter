import { configureStore } from "@reduxjs/toolkit";
import authenticatedUser from "./reducers/authenticatedUser";
import questions from "./reducers/questions";
import users from "./reducers/users";

export const store = configureStore({
  reducer: {
    authenticatedUser,
    questions,
    users,
  },
});
