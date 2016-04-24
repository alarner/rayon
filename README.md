# rayon

Rayon is a simple react modal component.

`npm install --save rayon`

### Usage

main.scss

```scss
@import 'node_modules/rayon/src/styles/rayon'; // Base modal styles
@import 'node_modules/rayon/src/styles/theme'; // Rayon modal theme
```

ParentComponent.js

```js
import Rayon from 'rayon';
const ParentComponent = React.createClass({
	getInitialState: function() {
		return {
			modalVisible: false
		};
	},
	render: function() {
		return (
			<div>
				<button onClick={this.openModal}>Open Modal</button>
				<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal}>
					<header>This is a header</header>
					<section>This is the modal content</section>
					<footer>
						<button onClick={this.closeModal}>Close</button>
					</footer>
				</Rayon>
			</div>
		)
	},
	openModal: function() {
		this.setState({
			modalVisible: true
		});
	},
	closeModal: function() {
		this.setState({
			modalVisible: false
		});
	},
});
```

### React Properties

#### isOpen

`isOpen` takes a **boolean** value that determines whether or not the modal should be visible. Often this will be stored in the parent component's state and passed to the Rayon model in the render method.

#### onClose

`onClose` takes a **function** that is called each time the escape key is pressed while the Rayon modal is open. Pass in your own function that handles closing the modal.

