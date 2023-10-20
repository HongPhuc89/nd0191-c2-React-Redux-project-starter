export const INITIAL_USERS = "INITIAL_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";



export function initialUsers(users) {
    return {
        type: INITIAL_USERS,
        users,
    };
}

export function addUserAnswer(authenticatedUser, questionId, answer) {
    return {
        type: ADD_USER_ANSWER,
        authenticatedUser,
        questionId,
        answer,
    };
}

export function addUserQuestion({author, id}) {
    return {
        type: ADD_USER_QUESTION,
        author,
        questionId: id,
    };
}
