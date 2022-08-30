//Creamos los tipos de acciones (action types)
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

/* Luego definimos los 'action creators', funciones que retornan una acción, que consiste en un tipo y -opcionalmente- un payload que contiene información para actualizar el estado */
export const getPosts = () => ({
  type: GET_POSTS,
});
export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});
export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

/* Y creamos el asynchronous thunk action que combina las tres acciones de arriba. Cuando invocamos este thunk, despacha la acción inicial getPosts() y le dice a Redux que se prepara para una API call. Entonces, en un bloque try/catch, hace lo necesario para obtener el recurso y despachar las acciones getPostsSuccess o getPostsFailure según se requiera.*/
export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts())
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!res.ok) throw new Error()
      const data = await res.json()
      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}