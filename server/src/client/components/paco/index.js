import React from 'react';
import { connect } from 'react-redux';

const Paco = props => {
	return (
		<div>
			<h1>I'm paco component, awesome!</h1>
			<h2>My counter {props.counter} !!!</h2>
			<hr/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { counter: state.test.counter };
};

export default connect(mapStateToProps)(Paco);