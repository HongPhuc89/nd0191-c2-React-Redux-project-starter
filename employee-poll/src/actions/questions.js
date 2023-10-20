import { saveAnswer, saveQuestion } from "../utils/api";
import { addUserAnswer, addUserQuestion } from "./users";

export const INITIAL_QUESTIONS = "INITIAL_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export function initialQuestions(questions) {
  return {
    type: INITIAL_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addQuestionAnswer(author, qid, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    author,
    qid,
    answer,
  };
}

export function handleAddQuestion(firstOption, secondOption) {
  return (dispatch, getState) => {
    const { authenticatedUser } = getState();

    return saveQuestion(firstOption, secondOption, authenticatedUser.id).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
      }
    );
  };
}

export function handleAddQuestionAnswer(questionId, answer) {
  return (dispatch, getState) => {
    const { authenticatedUser } = getState();
    return saveAnswer(authenticatedUser.id, questionId, answer).then(() => {
      dispatch(addQuestionAnswer(authenticatedUser.id, questionId, answer));
      dispatch(addUserAnswer(authenticatedUser.id, questionId, answer));
    });
  };
}
