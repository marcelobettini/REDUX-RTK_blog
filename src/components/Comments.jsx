import React from 'react'
const Comments = ({ comment }) => (
  <aside className="comment">
    <h2>{comment.title}</h2>
    <h3>{comment.email}</h3>
    <p>{comment.body}</p>
  </aside>
)
export default Comments