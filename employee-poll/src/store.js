import {configureStore} from '@reduxjs/toolkit';
import authenticatedUser from "./reducers/authenticatedUser";


export const store = configureStore({
  reducer: {
    authenticatedUser,
  },
});
