import React from 'react';
import { increment } from '../../actions';
import { connect } from 'react-redux';
import './index.css';

const Pepe = props => {
	return (
		<div id="pepe" styleName="paco">
			<h1>I'm pepe component, yeaaaaah!</h1>
			<button onClick={props.increment}>increment</button>
			<hr/>
		</div>
	);
};

export default connect(null, { increment })(Pepe);