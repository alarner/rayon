let React = require('react');
let ReactDOM = require('react-dom');
let Rayon = require('../../../dist/index');

let Examples = React.createClass({
	getInitialState: function() {
		return {
			showModalOne: false,
			showModalTwo: false
		};
	},
	render: function() {
		return (
			<div>
				<button onClick={() => this.setState({showModalOne: true})}>Modal One</button>
				<button onClick={() => this.setState({showModalTwo: true})}>Modal Two</button>
				<Rayon isOpen={this.state.showModalOne} onClose={() => this.setState({showModalOne: false})} bodyClass="rayon-no-overflow">
					<header>
						Modal #1
					</header>
					<section>
						<h2>Click on the background or press escape to close</h2>
						<p>Notice how the background stays fixed when you scroll the page. This is due to the following CSS...</p>
						<code>{'\n'}
							.rayon-parent {'{'}{'\n'}
							{'\t'}width: 100%;{'\n'}
							{'\t'}height: 100%;{'\n'}
							{'\t'}position: fixed;{'\n'}
							{'\t'}top: 0;{'\n'}
							{'\t'}left: 0;{'\n'}
							{'\t'}overflow-y: scroll;{'\n'}
							{'}'}{'\n'}
							.rayon-no-overflow {'{'}{'\n'}
							{'\t'}overflow: hidden;{'\n'}
							{'}'}{'\n'}
						</code>
						<p>.rayon-no-overflow is added to the body element each time the modal is open by using the bodyClass property.</p>
						<p>Lorem ipsum Officia sunt esse id proident aute aliquip laborum deserunt dolore ea in dolor occaecat aliqua et magna enim qui irure consectetur officia esse ad quis ut ea fugiat quis do incididunt pariatur cillum nisi magna id cupidatat esse dolore cupidatat sed mollit sit amet nulla sint eu nostrud labore exercitation laborum amet magna nulla occaecat labore et pariatur exercitation nostrud et quis quis non laboris enim in aute in ut ea deserunt exercitation nostrud reprehenderit ut incididunt sed aliqua ea cupidatat incididunt aliquip proident qui sint aute nostrud anim in mollit nostrud esse ut in et ex labore dolore fugiat deserunt Excepteur Excepteur minim commodo dolor magna et voluptate ullamco officia adipisicing esse ut in adipisicing officia est in sint exercitation nisi incididunt non enim ullamco consectetur officia elit labore sit enim Excepteur esse laboris laborum incididunt incididunt anim nisi commodo elit labore eu ex magna in in non pariatur in nisi sint deserunt sint dolore ex adipisicing sint consectetur dolore Ut aliquip voluptate Ut nostrud aliqua consequat cupidatat dolor adipisicing reprehenderit in ut enim proident voluptate Ut dolore aute aliqua veniam dolor est dolor adipisicing amet do cupidatat do eiusmod commodo adipisicing esse ut nisi pariatur eiusmod est sed Excepteur velit dolor Excepteur in dolor dolore exercitation consectetur magna non id et irure laborum.</p>
						<p>Lorem ipsum Officia sunt esse id proident aute aliquip laborum deserunt dolore ea in dolor occaecat aliqua et magna enim qui irure consectetur officia esse ad quis ut ea fugiat quis do incididunt pariatur cillum nisi magna id cupidatat esse dolore cupidatat sed mollit sit amet nulla sint eu nostrud labore exercitation laborum amet magna nulla occaecat labore et pariatur exercitation nostrud et quis quis non laboris enim in aute in ut ea deserunt exercitation nostrud reprehenderit ut incididunt sed aliqua ea cupidatat incididunt aliquip proident qui sint aute nostrud anim in mollit nostrud esse ut in et ex labore dolore fugiat deserunt Excepteur Excepteur minim commodo dolor magna et voluptate ullamco officia adipisicing esse ut in adipisicing officia est in sint exercitation nisi incididunt non enim ullamco consectetur officia elit labore sit enim Excepteur esse laboris laborum incididunt incididunt anim nisi commodo elit labore eu ex magna in in non pariatur in nisi sint deserunt sint dolore ex adipisicing sint consectetur dolore Ut aliquip voluptate Ut nostrud aliqua consequat cupidatat dolor adipisicing reprehenderit in ut enim proident voluptate Ut dolore aute aliqua veniam dolor est dolor adipisicing amet do cupidatat do eiusmod commodo adipisicing esse ut nisi pariatur eiusmod est sed Excepteur velit dolor Excepteur in dolor dolore exercitation consectetur magna non id et irure laborum.</p>
					</section>
					<footer>
						<button onClick={() => this.setState({showModalOne: false})}>Close Modal</button>
					</footer>
				</Rayon>
				<Rayon isOpen={this.state.showModalTwo} onClose={() => this.setState({showModalTwo: false})} bodyClass="rayon-no-overflow">
					<header>
						Modal #2
					</header>
					<section>
						<h2>Click on the background or press escape to close</h2>
						<p>Notice how the background stays fixed when you scroll the page. This is due to the following CSS...</p>
						<code>{'\n'}
							.rayon-parent {'{'}{'\n'}
							{'\t'}width: 100%;{'\n'}
							{'\t'}height: 100%;{'\n'}
							{'\t'}position: fixed;{'\n'}
							{'\t'}top: 0;{'\n'}
							{'\t'}left: 0;{'\n'}
							{'\t'}overflow-y: scroll;{'\n'}
							{'}'}{'\n'}
							.rayon-no-overflow {'{'}{'\n'}
							{'\t'}overflow: hidden;{'\n'}
							{'}'}{'\n'}
						</code>
						<p>.rayon-no-overflow is added to the body element each time the modal is open by using the bodyClass property.</p>
						<p>Lorem ipsum Officia sunt esse id proident aute aliquip laborum deserunt dolore ea in dolor occaecat aliqua et magna enim qui irure consectetur officia esse ad quis ut ea fugiat quis do incididunt pariatur cillum nisi magna id cupidatat esse dolore cupidatat sed mollit sit amet nulla sint eu nostrud labore exercitation laborum amet magna nulla occaecat labore et pariatur exercitation nostrud et quis quis non laboris enim in aute in ut ea deserunt exercitation nostrud reprehenderit ut incididunt sed aliqua ea cupidatat incididunt aliquip proident qui sint aute nostrud anim in mollit nostrud esse ut in et ex labore dolore fugiat deserunt Excepteur Excepteur minim commodo dolor magna et voluptate ullamco officia adipisicing esse ut in adipisicing officia est in sint exercitation nisi incididunt non enim ullamco consectetur officia elit labore sit enim Excepteur esse laboris laborum incididunt incididunt anim nisi commodo elit labore eu ex magna in in non pariatur in nisi sint deserunt sint dolore ex adipisicing sint consectetur dolore Ut aliquip voluptate Ut nostrud aliqua consequat cupidatat dolor adipisicing reprehenderit in ut enim proident voluptate Ut dolore aute aliqua veniam dolor est dolor adipisicing amet do cupidatat do eiusmod commodo adipisicing esse ut nisi pariatur eiusmod est sed Excepteur velit dolor Excepteur in dolor dolore exercitation consectetur magna non id et irure laborum.</p>
						<p>Lorem ipsum Officia sunt esse id proident aute aliquip laborum deserunt dolore ea in dolor occaecat aliqua et magna enim qui irure consectetur officia esse ad quis ut ea fugiat quis do incididunt pariatur cillum nisi magna id cupidatat esse dolore cupidatat sed mollit sit amet nulla sint eu nostrud labore exercitation laborum amet magna nulla occaecat labore et pariatur exercitation nostrud et quis quis non laboris enim in aute in ut ea deserunt exercitation nostrud reprehenderit ut incididunt sed aliqua ea cupidatat incididunt aliquip proident qui sint aute nostrud anim in mollit nostrud esse ut in et ex labore dolore fugiat deserunt Excepteur Excepteur minim commodo dolor magna et voluptate ullamco officia adipisicing esse ut in adipisicing officia est in sint exercitation nisi incididunt non enim ullamco consectetur officia elit labore sit enim Excepteur esse laboris laborum incididunt incididunt anim nisi commodo elit labore eu ex magna in in non pariatur in nisi sint deserunt sint dolore ex adipisicing sint consectetur dolore Ut aliquip voluptate Ut nostrud aliqua consequat cupidatat dolor adipisicing reprehenderit in ut enim proident voluptate Ut dolore aute aliqua veniam dolor est dolor adipisicing amet do cupidatat do eiusmod commodo adipisicing esse ut nisi pariatur eiusmod est sed Excepteur velit dolor Excepteur in dolor dolore exercitation consectetur magna non id et irure laborum.</p>
					</section>
					<footer>
						<button onClick={() => this.setState({showModalTwo: false})}>Close Modal</button>
					</footer>
				</Rayon>
			</div>
		);
	}
});


ReactDOM.render(<Examples />, document.querySelector('header'));