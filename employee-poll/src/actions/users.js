export const INITIAL_USERS = "INITIAL_USERS";


export function initialUsers(users) {
    return {
        type: INITIAL_USERS,
        users,
    };
}
