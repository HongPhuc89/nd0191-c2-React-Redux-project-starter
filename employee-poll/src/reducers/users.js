import { INITIAL_USERS, ADD_USER_ANSWER, ADD_USER_QUESTION } from "../actions/users";


export default function users(state = {}, action) {
  switch (action.type) {
    case INITIAL_USERS:
      return {
        ...state,
        ...action.users,
      };
      case ADD_USER_ANSWER:
      return {
        ...state,
        [action.authenticatedUser]: {
          ...state[action.authenticatedUser],
          answers: {
            ...state[action.authenticatedUser].answers,
            [action.questionId]: action.answer,
          },
        },
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.questionId),
        },
      };

    default:
      return state;
  }
}
