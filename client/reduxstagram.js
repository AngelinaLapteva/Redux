// let's go!
import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import mystore, { history } from './store';
const router = (

	<Provider store={mystore}>
				<Router history={history}>
			{/* How router works in react: 1. Whatever is mathches / in address line will put for us main component
			2. and if no "/" then pass children which is PhotoGrid
			3. or if path is equal to /view/:postId then send Single component to show on the page  */}
					<Route path="/" component={App}>
						<IndexRoute component={PhotoGrid}> </IndexRoute>
						<Route path="/view/:postId" component={Single}></Route>
					</Route>
				</Router>
				</Provider>
)

 render(router, document.getElementById('root'))