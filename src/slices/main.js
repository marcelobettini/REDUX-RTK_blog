import { combineReducers } from "redux";
import postsSlice from './postsSlice'
import postSlice from "./postSlice";
import commentsSlice from "./commentsSlice";
const rootReducer = combineReducers({
  posts: postsSlice,
  post: postSlice,
  comments: commentsSlice
});
export default rootReducer;