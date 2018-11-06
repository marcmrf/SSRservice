import React from 'react';
import { increment } from '../../actions';
import { connect } from 'react-redux';

const Pepe = props => {
	return (
		<div id="pepe">
			<h1>I'm pepe component, yeaaaaah!</h1>
			<button onClick={props.increment}>increment</button>
			<hr/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        }
    };
};

export default connect(null, mapDispatchToProps)(Pepe);