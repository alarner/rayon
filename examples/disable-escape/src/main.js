let React = require('react');
let ReactDOM = require('react-dom');
let Rayon = require('../../../dist/index');

let Examples = React.createClass({
	getInitialState: function() {
		return {
			showModal: false
		};
	},
	render: function() {
		return (
			<div>
				<button onClick={this.show}>Default</button>
				<Rayon isOpen={this.state.showModal} onClose={this.close} escapeToClose={false}>
					<header>
						Disabled Escape Key Modal
					</header>
					<section>
						<h2>Notice that escape will no longer close the modal.</h2>
					</section>
					<footer>
						<button onClick={this.close}>Close Modal</button>
					</footer>
				</Rayon>
			</div>
		);
	},
	show: function() {
		this.setState({ showModal: true });
	},
	close: function() {
		this.setState({
			showModal: false
		});
	}
});


ReactDOM.render(<Examples />, document.querySelector('header'));