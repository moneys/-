//功能就是在action触发后，返回一个新的state(就是个对象)
export default function addUser(state = {total: 0}, action) {
    if (action.type == 'addUser') {
        return {total: state.total + 1};
    }
    if (action.type == 'deleteUser') {
        return {total: state.total == 0 ? 0 : state.total - 1};
    }
    return {total: state.total};
}