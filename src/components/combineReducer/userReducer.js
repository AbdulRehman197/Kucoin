const INIT_STATE = {}
const editReducer = (state = INIT_STATE, action) => {
   // debugger;
    switch (action.type) {
        case 'EDIT':
            return state;
        case 'USER_LOGGED_IN':
            return action.user;
        default:
            return state
    }
}
export default editReducer;