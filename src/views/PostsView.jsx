import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts, postsSelector } from '../slices/postsSlice'

import Post from '../components/Post'

const PostsView = () => {
  const dispatch = useDispatch()
  const { posts, loading, hasErrors } = useSelector(postsSelector)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Something went South...</p>

    return posts.map(post => <Post key={post.id} post={post} excerpt />)
  }

  return (
    <section>
      <h1>Articles Repository</h1>
      {renderPosts()}
    </section>
  )
}

export default PostsView