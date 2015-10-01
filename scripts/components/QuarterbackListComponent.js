var React = require('react');
var QuarterbackComponent = require('./QuarterbackComponent');

module.exports = React.createClass({
	render: function() {
		var qbList = this.props.quarterbacks.map(function(quarterback) {
			return (
				<QuarterbackComponent quarterback = {quarterback} />
				);
		});
		return (
			<div className="row">
				<h1>Quarterbacks</h1>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Team</th>
							<th>Att.</th>
							<th>Comp.</th>
							<th>Yards</th>
							<th>TD</th>
							<th>Int.</th>
							<th>Sacks</th>
						</tr>
					</thead>
					<tbody>
					{qbList}
					</tbody>
				</table>
			</div>
		);
	}
});