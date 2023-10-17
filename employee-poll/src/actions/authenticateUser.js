export const SET_AUTHENTICATED_USER = "SET_AUTHENTICATED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function setAuthenticatedUser(authenticatedUser) {
    return {
        type: SET_AUTHENTICATED_USER,
        authenticatedUser,
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
    };
}

export function handleLogin(username, password) {
    return (dispatch, getState) => {
        const {users} = getState();

        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (!!user) {
            return dispatch(setAuthenticatedUser(user));
        }
    };
}

export function handleLogout() {
    return (dispatch) => {
        return dispatch(logoutUser());
    };
}
