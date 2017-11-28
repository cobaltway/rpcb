export default function() {
    return {
        state: {
            SignIn: false,
            SignUp: false,
            NewCharacter: false,
            EditAvatar: false
        },
        mutations: {
            OPEN(state, modal) {
                state[modal] = true;
            },
            CLOSE(state, modal) {
                state[modal] = false;
            }
        }
    };
}
