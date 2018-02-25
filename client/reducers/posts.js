// a reducer takes in 2 things:
// 1. the action (info about what happend)
// 2. copy of current state

function posts(state =[], action){
	switch(action.type) {
		case 'INCREMENT_LIKES':
		const i = action.index;
		return [
			...state.slice(0, i), // taking state before the one we are updating
			{...state[i], likes: state[i].likes+1},
			...state.slice(i+1) // taking state after the one we are updating
		]
		//  return thr updated state
		default:
		return state;
	}
	return state;
}
export default posts;