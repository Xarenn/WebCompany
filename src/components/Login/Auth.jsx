export function Authenticate(user) {
    return {
        type: 'USER_AUTH',
        payload: user
    };
}