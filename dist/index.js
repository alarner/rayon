'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'Rayon',
	getDefaultProps: function getDefaultProps() {
		return {
			escapeToClose: true,
			clickToClose: true,
			bodyClass: ''
		};
	},
	componentWillMount: function componentWillMount() {
		document.querySelector('body').addEventListener('keyup', this.keyUp);
		this.body = document.querySelector('body');
		this.setBodyClass(this.props.isOpen);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this.setBodyClass(nextProps.isOpen);
	},
	componentWillUnmount: function componentWillUnmount() {
		document.querySelector('body').removeEventListener('keyup', this.keyUp);
		this.setBodyClass(false);
	},
	setBodyClass: function setBodyClass(add) {
		if (this.props.bodyClass) {
			if (add) {
				this.body.classList.add(this.props.bodyClass);
			} else {
				this.body.classList.remove(this.props.bodyClass);
			}
		}
	},
	render: function render() {
		if (this.props.isOpen) {
			return React.createElement(
				'div',
				{ onKeyUp: this.keyUp, className: 'rayon-parent', onClick: this.close('click') },
				React.createElement(
					'div',
					{ className: 'rayon-spacer' },
					React.createElement(
						'div',
						{ className: 'rayon', onClick: this.stopPropagation },
						this.props.children
					)
				),
				React.createElement('div', { className: 'rayon-overlay' })
			);
		} else {
			return null;
		}
	},
	keyUp: function keyUp(e) {
		if (e.keyCode === 27) {
			this.close('escape')();
		}
	},
	close: function close(method) {
		var _this = this;

		return function () {
			if (_this.props.isOpen && _this.props.onClose) {
				if (method.toLowerCase() === 'click' && _this.props.clickToClose) {
					_this.props.onClose();
				}
				if (method.toLowerCase() === 'escape' && _this.props.escapeToClose) {
					_this.props.onClose();
				}
			}
		};
	},
	stopPropagation: function stopPropagation(e) {
		e.stopPropagation();
	}
});