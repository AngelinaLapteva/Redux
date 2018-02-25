import React from 'react';

// this element we need for setting  up react router to navigate between pages
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1> 
					<Link to="/"> Reduxstagram </Link>
				</h1>
			{/*We are taking our Main component and clone it to pass props of Main to children of Main - photoGrid.js */}
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});
export default Main;