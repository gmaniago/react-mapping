
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.todo.get('description')}</td>
				<td>{this.props.todo.get('completed')}</td>
			</tr>
			);
	}
})
