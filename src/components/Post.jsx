import React from 'react'
import { Link } from 'react-router-dom'
const Post = ({ post, excerpt }) => {
  return (
    <article className={excerpt ? "post-excerpt" : "post"}>
      <h2>{post.title}</h2>
      <p>{excerpt ? post.body.substring(0, 90) : post.body}...</p>
      {excerpt && (
        <Link to={`/posts/${post.id}`} className="button">Read More
        </Link>
      )}
    </article>
  )
}
export default Post