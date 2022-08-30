export const GET_POST = 'GET POSTS'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const getPost = () => ({ type: GET_POST })
export const getPostSuccess = post => ({
  type: GET_POST_SUCCESS,
  payload: post,
})
export const getPostFailure = () => ({ type: GET_POST_FAILURE })

export function fetchPost(id) {
  return async dispatch => {
    dispatch(getPost())
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`)
      if (!res.ok) throw new Error(res.status)
      const data = await res.json()
      dispatch(getPostSuccess(data))
    } catch (error) {
      dispatch(getPostFailure())
    }
  }
}