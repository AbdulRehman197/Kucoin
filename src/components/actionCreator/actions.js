const actions = {
    editAction: (editProduct) => {

        return dispatch => {
            setTimeout(() => {
                dispatch({
                    type: 'EDIT',
                    editProduct
                })
            }, 1000)
        }
    },
    loggedInAction: (user) => {
        return dispatch => {
            //setTimeout(() => {
            dispatch({
                type: 'USER_LOGGED_IN',
                user
            })
        }
        //}, 1000)
    },
    // logoutAction: (logoutUser) => {
    //     type: 'LOGOUT',
    //     logoutUser
    // }
}
export default actions;