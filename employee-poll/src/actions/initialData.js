import { initialUsers } from "./users";
import { initialQuestions } from "./questions";
import { getInitialData } from "../utils/api";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(initialUsers(users));
      dispatch(initialQuestions(questions));
    });
  };
}
