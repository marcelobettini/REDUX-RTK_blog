import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//Traemos la async action fetchPosts
import { fetchPosts } from '../actions/postsActions'
//Importamos el componente Post.jsx
import Post from '../components/Post';

/* El estado de Redux está a partir de aquí en 
las props del componente...
Y ahora incorporamos dispatch y useEffect */
const PostsView = ({ dispatch, loading, posts, hasErrors }) => {

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  //Y hacemos una función para renderizar de acuerdo al resultado
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Something went South...</p>
    return posts && (posts.map((post) => <Post key={post.id} post={post} excerpt />))
  }
  return (
    <section>
      <h1>Articles repository</h1>
      {renderPosts()}
    </section>
  )
}
/* Mapeamos el estado de Redux a las props
del componente. Lo que escribimos aquí es con propósitos educativos.
Serviría detallarlo en caso de que trajeramos piezas de estado de distintos reducers. En este caso de uso puntual, puede resumirse en una línea */
/* const mapStateToProps = (state) => ({
   loading: state.posts.loading,
   posts: state.posts.posts,
   hasErrors: state.posts.hasErrors
 }) */
const mapStateToProps = (state) => state.posts
//Y aquí conectamos Redux con React
export default connect(mapStateToProps)(PostsView);