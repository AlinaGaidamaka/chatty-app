import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import ChatReducer from './reducer_chat';
import UsersLogInReducer from './reducer_logIn';
import CurrentUser from './reducer_current';
import SelectedUser from './reducer_selected';


const rootReducer = combineReducers({
  users: UsersReducer,
  chat: ChatReducer,
  usersLogIn : UsersLogInReducer,
  user : CurrentUser,
  selectedUser : SelectedUser

});

export default rootReducer;
