'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'Rayon',
	componentWillMount: function componentWillMount() {
		document.body.addEventListener('keyup', this.keyUp);
	},
	render: function render() {
		if (this.props.isOpen) {
			return React.createElement(
				'div',
				{ onKeyUp: this.keyUp, ref: 'parent' },
				React.createElement(
					'div',
					{ className: 'rayon-spacer' },
					React.createElement(
						'div',
						{ className: 'rayon' },
						this.props.children
					)
				),
				React.createElement('div', { className: 'overlay' })
			);
		} else {
			return null;
		}
	},
	keyUp: function keyUp(e) {
		if (this.props.isOpen && this.props.onClose && e.keyCode === 27) {
			this.props.onClose();
		}
	}
});