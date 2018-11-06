import {
	INCREMENT
} from '../actions';

export default (state = {
	counter: 0
}, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state,
				counter: state.counter + 1
			};
		default:
			return state;
	}
};