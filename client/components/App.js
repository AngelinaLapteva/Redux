import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// we need this component in order to pass store data from <Provider> to Main component and we also need to get some events running based on actionCreators

function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}


function mapDispachToProps (dispatch) {
 return bindActionCreators(actionCreators, dispatch);
}

// we are sending our state which has posts and comments to Main component (in its props)
const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;