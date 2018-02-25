import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass ({
	render(){
		const { post, i, comments } = this.props;
		return (
			<figure className="grid-figure">
			 <div className="grid-photo-wrap">
			{/* Link is basically same as a href = "" but with dynamic data to route you to a specific place*/}
			 <Link to={`/view/${this.props.post.code}`}> 
			 	<img src={post.display_src} alt={post.caption} className="grid-photo" />
			  </Link>
			  <CSSTransitionGroup transitionName="like"
			  					  transitionEnterTimeout={500}
			  					  transitionLeaveTimeout={500}>
			  	<span key={post.likes} className="likes-heart"> {post.likes} </span>
			  </CSSTransitionGroup>

			 </div>
			 <figcaption>
			 	<p> {post.caption} </p>
			 	<div className="control-buttons">
			 {/* we  need to bind our increment function and call it on event onClick*/}
			 		<button onClick={this.props.increment.bind(null, i)} className="likes"> &hearts; {post.likes}</button>
			 		<Link to={`/view/${post.code}`} className="button">
			 			<span className="comment-count">
			 				<span className="speech-bubble"></span>
			 			{/* we are making ternary operator here to check if we have any comments or not, if we don't have comment we simply reflect 0 */}
			 				{comments[post.code] ? comments[post.code].length : 0}
			 			</span>
			 		</Link>
			 	</div>
			 </figcaption>
			</figure>	

		)
	}
})
export default Photo;