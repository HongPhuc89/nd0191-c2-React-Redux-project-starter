import {combineReducers} from "@reduxjs/toolkit";
import authenticatedUser from "./authenticatedUser";
import questions from "./questions";
import users from "./users";
import userActivity from "./userActivity";


export default combineReducers({
    authenticatedUser,
    users,
    questions,
    userActivity,
});
