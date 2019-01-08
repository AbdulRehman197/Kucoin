import products from "../Data/store";
const INIT_STATE = products;

const editReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'EDIT':

            // var targetCompany = state.filter((item) => {
            //     return item.name === 'Gamica'
            // })[0];

            // var targetIndex = state.indexOf(targetCompany);

            // var freshObj = { ...targetCompany, ...action.editProduct };

            // state[targetIndex] = freshObj;

            return state; 
        //return [...state, Object.assign({}, action.editProduct)]
        default:
            return state
    }
}
export default editReducer;