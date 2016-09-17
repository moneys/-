import React, {Component, PropTypes} from "react";

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user, editUser, updateUser} = this.props

        if (!user.edit) {
            return (
                <div>
                    <input value={user.name} readOnly/>
                    <button onClick={()=>editUser(user.id)}>edit</button>
                </div>
            );
        } else {

            return (
                <div>
                    请输入:<input defaultValue={user.name} ref="name"/>
                    <button onClick={()=>updateUser(user.id, this.refs.name.value)}>save</button>
                </div>
            );
        }
    }
}

Item.propTypes = {
    user: PropTypes.object.isRequired,
    editUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
}
export default Item;