import React from 'react';
import { increment } from '../../actions';
import { connect } from 'react-redux';

const Pepe = () => {
	return (
		<div id="pepe">
			<h1>I'm pepe component, yeaaaaah!</h1>
			<hr/>
		</div>
	);
};

export default connect(null, { increment })(Pepe);