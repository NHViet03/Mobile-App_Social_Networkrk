import { combineReducers } from "redux";
import auth from './authReducer'
import homePosts from './postReducer'
import notify from './notifyReducer'
import commentModal from './commentModalReducer'
import reportPostModal from './reportPostModalReducer'
import sharePostModal from './sharePostModalReducer'
import newChatModal from  './newChatModalReducer'
import logOutModal from './logOutModalReducer'
export default combineReducers({
  auth,
  homePosts,
  notify,
  commentModal,
  reportPostModal,
  sharePostModal,
  commentModal,
  newChatModal,
  logOutModal,
});
