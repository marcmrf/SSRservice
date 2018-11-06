import React from 'react';
import {
	renderToString
} from 'react-dom/server';
import { Provider } from 'react-redux';

export default (req, store) => {
	return import(`../client/components/${req.query.component}`).then(({ default: Component }) => {
		return renderToString(
			<Provider store={store}>
				<Component />
			</Provider>
		);
	});
};