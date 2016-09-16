import React, {Component, PropTypes} from "react";
import './style.scss'

class Demo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 由容器或父组件传递下来的状态数据/动作
        const {total, actions} = this.props;
        return (
            <div className="demo">
                你是这个世界上无与伦比的美丽~
                <span>人数:{total}</span>
                <button onClick={actions.addUser}>增加</button>
                <button onClick={actions.deleteUser}>减少</button>
            </div>
        )
    }
}
// 定义组件需要的参数类型
Demo.propTyeps = {
    total: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}

export default Demo;