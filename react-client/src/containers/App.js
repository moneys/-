import React, {Component, PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Demo from "../components/Demo/Demo";
import * as DemoActions from "../actions/demo";

class App extends Component {
    render() {
        // 有了reducers , 可以直接从props获取传递的动作和改变后的状态数据
        const {total, actions} = this.props
        return (<div>
            <div>这是外层容器,用来放置组件</div>
            <Demo total={total} actions={actions}/>
        </div>);
    }
}
App.PropTypes = {
    total: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};
// 定义个函数,将状态数据映射到组件的props中
function mapStateToProps(state) {
    return {
        total: state.total
    };
}
// 定义个函数,将处理事件的动作映射到组件的props中
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DemoActions, dispatch)
    }

}
// 连接上两个函数和组件
export default connect(mapStateToProps, mapDispatchToProps)(App);