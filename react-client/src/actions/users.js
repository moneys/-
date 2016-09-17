import * as types from "../constants/ActionTypes";
export function addUser() {
    return {
        type: types.ADD_USER
    };
}
export function editUser(id) {
    return {
        type: types.EDIT_USER,
        id: id
    };
}
export function updateUser(id, name) {
    return {
        type: types.UPDATE_USER,
        id: id,
        name: name,
    };
}