import jsdom from 'jsdom';

if (typeof document === 'undefined') {
	const exposedProperties = ['window', 'navigator', 'document'];

	global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');

	global.window = global.document.defaultView;

	Object.keys(document.defaultView).forEach((property) => {
		if (typeof global[property] === 'undefined') {
			exposedProperties.push(property);
			global[property] = document.defaultView[property];
		}
	});

	global.navigator = {
		userAgent: 'node.js'
	};
}
