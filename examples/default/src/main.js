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
				<Rayon isOpen={this.state.showModal} onClose={this.close}>
					<header>
						Default Modal Behavior
					</header>
					<section>
						<h2>Click on the background or press escape to close</h2>
						<p>Lorem ipsum Officia sunt esse id proident aute aliquip laborum deserunt dolore ea in dolor occaecat aliqua et magna enim qui irure consectetur officia esse ad quis ut ea fugiat quis do incididunt pariatur cillum nisi magna id cupidatat esse dolore cupidatat sed mollit sit amet nulla sint eu nostrud labore exercitation laborum amet magna nulla occaecat labore et pariatur exercitation nostrud et quis quis non laboris enim in aute in ut ea deserunt exercitation nostrud reprehenderit ut incididunt sed aliqua ea cupidatat incididunt aliquip proident qui sint aute nostrud anim in mollit nostrud esse ut in et ex labore dolore fugiat deserunt Excepteur Excepteur minim commodo dolor magna et voluptate ullamco officia adipisicing esse ut in adipisicing officia est in sint exercitation nisi incididunt non enim ullamco consectetur officia elit labore sit enim Excepteur esse laboris laborum incididunt incididunt anim nisi commodo elit labore eu ex magna in in non pariatur in nisi sint deserunt sint dolore ex adipisicing sint consectetur dolore Ut aliquip voluptate Ut nostrud aliqua consequat cupidatat dolor adipisicing reprehenderit in ut enim proident voluptate Ut dolore aute aliqua veniam dolor est dolor adipisicing amet do cupidatat do eiusmod commodo adipisicing esse ut nisi pariatur eiusmod est sed Excepteur velit dolor Excepteur in dolor dolore exercitation consectetur magna non id et irure laborum.</p>
						<p>Lorem ipsum Officia sunt esse id proident aute aliquip laborum deserunt dolore ea in dolor occaecat aliqua et magna enim qui irure consectetur officia esse ad quis ut ea fugiat quis do incididunt pariatur cillum nisi magna id cupidatat esse dolore cupidatat sed mollit sit amet nulla sint eu nostrud labore exercitation laborum amet magna nulla occaecat labore et pariatur exercitation nostrud et quis quis non laboris enim in aute in ut ea deserunt exercitation nostrud reprehenderit ut incididunt sed aliqua ea cupidatat incididunt aliquip proident qui sint aute nostrud anim in mollit nostrud esse ut in et ex labore dolore fugiat deserunt Excepteur Excepteur minim commodo dolor magna et voluptate ullamco officia adipisicing esse ut in adipisicing officia est in sint exercitation nisi incididunt non enim ullamco consectetur officia elit labore sit enim Excepteur esse laboris laborum incididunt incididunt anim nisi commodo elit labore eu ex magna in in non pariatur in nisi sint deserunt sint dolore ex adipisicing sint consectetur dolore Ut aliquip voluptate Ut nostrud aliqua consequat cupidatat dolor adipisicing reprehenderit in ut enim proident voluptate Ut dolore aute aliqua veniam dolor est dolor adipisicing amet do cupidatat do eiusmod commodo adipisicing esse ut nisi pariatur eiusmod est sed Excepteur velit dolor Excepteur in dolor dolore exercitation consectetur magna non id et irure laborum.</p>
						<p>Lorem ipsum Officia sunt esse id proident aute aliquip laborum deserunt dolore ea in dolor occaecat aliqua et magna enim qui irure consectetur officia esse ad quis ut ea fugiat quis do incididunt pariatur cillum nisi magna id cupidatat esse dolore cupidatat sed mollit sit amet nulla sint eu nostrud labore exercitation laborum amet magna nulla occaecat labore et pariatur exercitation nostrud et quis quis non laboris enim in aute in ut ea deserunt exercitation nostrud reprehenderit ut incididunt sed aliqua ea cupidatat incididunt aliquip proident qui sint aute nostrud anim in mollit nostrud esse ut in et ex labore dolore fugiat deserunt Excepteur Excepteur minim commodo dolor magna et voluptate ullamco officia adipisicing esse ut in adipisicing officia est in sint exercitation nisi incididunt non enim ullamco consectetur officia elit labore sit enim Excepteur esse laboris laborum incididunt incididunt anim nisi commodo elit labore eu ex magna in in non pariatur in nisi sint deserunt sint dolore ex adipisicing sint consectetur dolore Ut aliquip voluptate Ut nostrud aliqua consequat cupidatat dolor adipisicing reprehenderit in ut enim proident voluptate Ut dolore aute aliqua veniam dolor est dolor adipisicing amet do cupidatat do eiusmod commodo adipisicing esse ut nisi pariatur eiusmod est sed Excepteur velit dolor Excepteur in dolor dolore exercitation consectetur magna non id et irure laborum.</p>
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