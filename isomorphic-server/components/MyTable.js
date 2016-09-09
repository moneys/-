'use strict'
var React = require('react');

var MyTable = React.createClass({
        render() {
            var tableStyle = {border: 'solid 1px pink'};
            return (
                <table style={tableStyle}>
                    {this.props.users.map((user, index)=>
                        <tr key={index}>
                            <td>{user.name}</td>
                        </tr>)}
                </table>
            )
        }
    }
);
module.exports = MyTable;