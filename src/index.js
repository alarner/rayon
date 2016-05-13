let React = require('react');

module.exports = React.createClass({
	displayName: 'Rayon',
	getDefaultProps: function() {
		return {
			escapeToClose: true,
			clickToClose: true,
			bodyClass: ''
		};
	},
	componentWillMount: function() {
		document.querySelector('body').addEventListener('keyup', this.keyUp);
		this.body = document.querySelector('body');
		if(this.props.isOpen) {
			this.setBodyClass(true);
		}
	},
	componentWillReceiveProps: function(nextProps) {
		if(this.props.isOpen !== nextProps.isOpen) {
			this.setBodyClass(nextProps.isOpen);
		}
	},
	componentWillUnmount: function() {
		document.querySelector('body').removeEventListener('keyup', this.keyUp);
		this.close('unmount')();
	},
	setBodyClass: function(add) {
		if(this.props.bodyClass) {
			if(add) {
				this.body.classList.add(this.props.bodyClass);
			}
			else {
				this.body.classList.remove(this.props.bodyClass);
			}
		}
	},
	render: function() {
		if(this.props.isOpen) {
			return (
				<div onKeyUp={this.keyUp} className="rayon-parent" onClick={this.close('click')}>
					<div className="rayon-spacer">
						<div className="rayon" onClick={this.stopPropagation}>
							{this.props.children}
						</div>
					</div>
					<div className="rayon-overlay"></div>
				</div>
			);
		}
		else {
			return null;
		}
	},
	keyUp: function(e) {
		if(e.keyCode === 27) {
			this.close('escape')();
		}
	},
	close: function(method) {
		return () => {
			if(this.props.isOpen && this.props.onClose) {
				if(method.toLowerCase() === 'click' && this.props.clickToClose) {
					this.props.onClose();
				}
				if(method.toLowerCase() === 'escape' && this.props.escapeToClose) {
					this.props.onClose();
				}
				if(method.toLowerCase() === 'unmount') {
					this.props.onClose();
				}
			}
		};
	},
	stopPropagation: function(e) {
		e.stopPropagation();
	}
});