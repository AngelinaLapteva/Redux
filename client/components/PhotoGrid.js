import React from 'react';
import Photo from './Photo';


const PhotoGrid = React.createClass({
	render() {
		return (
			<div className="photo-grid">
{/* this.props.posts - is an array of objects. 
as a result we can use map to iterate through all the posts with data. 
and we pass inside 2 parametrs from our array: post - actual object with data
i - index of object
and we need to send props of Main to our Photo component. we are using spread here
key we need for react to distinct different elements and i prop is for us to find out what is the index of photo
*/}
				{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/>)}}
			</div>
		)
	}
});
export default PhotoGrid;