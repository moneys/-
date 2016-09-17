import * as types from "../constants/ActionTypes";
const initState = [{id: 0, name: 'sqq', edit: false}];
//功能就是在action触发后，返回一个新的state(就是个对象)
export default function users(state = initState, action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case types.ADD_USER:
            console.log('ADD_USER');
            return state;
        case types.EDIT_USER:
            console.log('EDIT_USER');
            return state.map(user=>
                user.id == action.id ?
                    Object.assign({}, user, {edit: true}) : user);
        case types.UPDATE_USER:
            console.log('UPDATE_USER');
            return state.map(user=>
                user.id == action.id ?
                    Object.assign({}, user, {edit: false, name: action.name})
                    : user);
        default:
            return state;
    }
}