// export - need to access this actions from other components
// increment likes - this is function (action for redux) which will have an object inside

export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}
// add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId: postId,
		author: author,
		comment: comment
	}
}
//remove comment, i -  порядковый номер коммента - например 3й сверху
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		I,
		postId
}}

