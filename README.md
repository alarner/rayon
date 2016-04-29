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

See the [default example](examples/default) for how to use the `isOpen` property.

#### onClose

`onClose` takes a **function** that is called each time the escape key is pressed while the Rayon modal is open. Pass in your own function that handles closing the modal.

See the [default example](examples/default) for how to use the `onClose` property.

#### clickToClose

`clickToClose` takes a **boolean**. If true, users will be able to click on the background of the modal to close it. If false, that functionality will be disabled. Defaults to true.

See the [disable click example](examples/disable-click) for how to use the `clickToClose` property.

#### escapeToClose

`escapeToClose` takes a **boolean**. If true, users will be able to press the escape key to close the modal. If false, that functionality will be disabled. Defaults to true.

See the [disable escape example](examples/disable-escape) for how to use the `escapeToClose` property.

#### bodyClass

`bodyClass` takes a **string**. If `bodyClass` is specified, every time the modal is opened, the specified class will be added to the body element of the page. Every time the modal is closed, the class will be removed. This is particularly useful for fixing the background when a modal is open.

See the [fixed background example](examples/fixed-background) for an example of how to use the `bodyClass` property.
