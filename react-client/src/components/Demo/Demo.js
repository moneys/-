import React, {Component, PropTypes} from "react";
import Item from "./Item";
import "./style.scss";

class Demo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 由容器或父组件传递下来的状态数据/动作
        const {users, actions} = this.props;
        return (
            <div className="demo">
                你是这个世界上无与伦比的美丽~
                <ul>
                    {users.map(user=>
                        <li key={user.id}>
                            <Item user={user} editUser={actions.editUser} updateUser={actions.updateUser}/>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
// 定义组件需要的参数类型
Demo.propTyeps = {
    users: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

export default Demo;