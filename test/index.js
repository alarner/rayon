let expect = require('chai').expect;
let TestUtils = require('react-addons-test-utils');
let sinon = require('sinon');
let React = require('react');
let Rayon = require('../src/index');


describe('Rayon', function(){
	it('should not render the modal if isOpen is set to false', function() {
		let renderedComponent = TestUtils.renderIntoDocument(
			<Rayon isOpen={false} />
		);
		expect(function() {
			TestUtils.findRenderedDOMComponentWithClass(
				renderedComponent,
				'rayon-parent'
			);
		}).to.throw('Did not find exactly one match (found: 0) for class:rayon-parent');
	});
	it('should render the modal if isOpen is set to true', function() {
		let renderedComponent = TestUtils.renderIntoDocument(
			<Rayon isOpen={true} />
		);
		let parent = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			'rayon-parent'
		);
		expect(parent, 'rayon-parent element should exist').to.be.ok;

		let spacer = parent.querySelectorAll('.rayon-spacer');

		expect(spacer.length, 'rayon-spacer element should exist').to.equal(1);

		spacer = spacer[0];

		let rayon = spacer.querySelectorAll('.rayon');

		expect(rayon.length, 'rayon element should exist').to.equal(1);

	});

	it('should properly render the children of the modal', function() {
		let renderedComponent = TestUtils.renderIntoDocument(
			<Rayon isOpen={true}>
				<h1>This is a test</h1>
			</Rayon>
		);
		let child = TestUtils.findRenderedDOMComponentWithTag(
			renderedComponent,
			'h1'
		);
		expect(child, 'child element should exist').to.be.ok;
		expect(child.innerHTML, 'child element should have correct text').to.equal('This is a test');
	});

	it('should trigger onClose prop when background is clicked', function() {
		let onClose = sinon.spy();
		let renderedComponent = TestUtils.renderIntoDocument(
			<Rayon isOpen={true} onClose={onClose} />
		);
		let parent = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			'rayon-overlay'
		);
		expect(onClose.called, 'onClose not called before background click').to.be.false;
		TestUtils.Simulate.click(
			parent
		);
		expect(onClose.called, 'onClose called after background click').to.be.true;
	});

	it('should not trigger onClose prop when background is clicked when clickToClose is false', function() {
		let onClose = sinon.spy();
		let renderedComponent = TestUtils.renderIntoDocument(
			<Rayon isOpen={true} onClose={onClose} clickToClose={false} />
		);
		let parent = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			'rayon-overlay'
		);
		expect(onClose.called, 'onClose not called before background click').to.be.false;
		TestUtils.Simulate.click(
			parent
		);
		expect(onClose.called, 'onClose not called after background click').to.be.false;
	});

	it('should trigger onClose prop when escape is pressed', function() {
		let onClose = sinon.spy();
		let renderedComponent = TestUtils.renderIntoDocument(
			<Rayon isOpen={true} onClose={onClose} />
		);
		let parent = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			'rayon-parent'
		);
		expect(onClose.called, 'onClose not called before escape press').to.be.false;
		TestUtils.Simulate.keyUp(
			parent,
			{
				keyCode: 27
			}
		);
		expect(onClose.called, 'onClose called after escape press').to.be.true;
	});

	it('should not trigger onClose prop when escape is pressed', function() {
		let onClose = sinon.spy();
		let renderedComponent = TestUtils.renderIntoDocument(
			<Rayon isOpen={true} onClose={onClose} escapeToClose={false} />
		);
		let parent = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			'rayon-overlay'
		);
		expect(onClose.called, 'onClose not called before escape press').to.be.false;
		TestUtils.Simulate.keyUp(
			parent,
			{
				keyCode: 27
			}
		);
		expect(onClose.called, 'onClose not called after escape press').to.be.false;
	});

});